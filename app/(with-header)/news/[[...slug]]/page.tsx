import { notFound } from 'next/navigation';
import { NewsSection } from '@/data/news-content';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { PageHeaderBlock } from '@/components/PageHeaderBlock/PageHeaderBlock';
import { BlockRenderer } from '@/components/BlockRenderer/BlockRenderer';
import Link from 'next/link';
import Image from 'next/image';
import DynamicIcon from '@/components/shared/DynamicIcon';

interface NewsDynamicPageProps {
  params: {
    slug: string[]; // e.g., ['company-news'], ['company-news', 'article-title']
  };
}

export default function NewsDynamicPage({ params }: NewsDynamicPageProps) {
  const slugPath = params.slug || [];

  // --- Render News List Page if slugPath is empty ---
  if (slugPath.length === 0) {
    const breadcrumbItems = [
      { label: '首頁', path: '/' },
      { label: NewsSection.name, path: `/${NewsSection.slug}` },
    ];

    return (
      <main>
        <PageHeaderBlock title={NewsSection.name} settings={{ showBackground: true, backgroundImage: NewsSection.image }} />

        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />

          {NewsSection.description && (
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">{NewsSection.description}</p>
          )}

          {NewsSection.categories.length > 0 && (
            <div className="mb-8 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">新聞分類</h2>
              <div className="flex flex-wrap gap-2">
                {NewsSection.categories.map(category => (
                  <Link key={category.id} href={`/${NewsSection.slug}/${category.slug}`} passHref>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200 cursor-pointer flex items-center">
                      {category.iconName && <DynamicIcon iconName={category.iconName} className="inline-block mr-2" />}
                      {category.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <section aria-labelledby="news-list" className="mt-8">
            <h2 id="news-list" className="sr-only">{NewsSection.name} 列表</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {NewsSection.items.map(item => (
                <Link key={item.id} href={`/${NewsSection.slug}/${item.slug}`} passHref>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    {item.image && (
                      <div className="relative w-full h-48">
                        <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{item.publishDate}</p>
                      {item.shortDescription && (
                        <p className="text-gray-700 text-base">{item.shortDescription}</p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    );
  }
  // --- End News List Page rendering ---

  // Determine if it's a category page or a detail page
  // For simplicity, assume if slugPath has 1 element, it's a category.
  // If slugPath has 2 elements, the last one is an item slug.
  // This logic might need to be more robust for multi-level categories.

  let currentCategory: ContentCategory | null = null;
  let currentItem: ContentItem | null = null;

  if (slugPath.length === 1) {
    // Potentially a category page
    currentCategory = NewsSection.categories.find(cat => cat.slug === slugPath[0]);
    if (!currentCategory) {
      // If not a category, check if it's an item directly under the section root
      currentItem = NewsSection.items.find(item => item.slug === slugPath[0]);
    }
  } else if (slugPath.length > 1) {
    // Potentially a detail page within a category
    const categorySlug = slugPath[0];
    const itemSlug = slugPath[slugPath.length - 1];

    currentCategory = NewsSection.categories.find(cat => cat.slug === categorySlug);
    if (currentCategory) {
      currentItem = NewsSection.items.find(item => item.categoryId === currentCategory?.id && item.slug === itemSlug);
    }
  }

  // Handle 404 if neither category nor item is found
  if (!currentCategory && !currentItem) {
    notFound();
  }

  const breadcrumbItems = [
    { label: '首頁', path: '/' },
    { label: NewsSection.name, path: `/${NewsSection.slug}` },
  ];

  if (currentCategory) {
    breadcrumbItems.push({ label: currentCategory.name, path: `/${NewsSection.slug}/${currentCategory.slug}` });
  }
  if (currentItem) {
    // If item is found, and it's under a category, ensure category is in breadcrumbs
    if (currentItem.categoryId && !currentCategory) {
        const itemCategory = NewsSection.categories.find(cat => cat.id === currentItem?.categoryId);
        if (itemCategory) {
            breadcrumbItems.push({ label: itemCategory.name, path: `/${NewsSection.slug}/${itemCategory.slug}` });
        }
    }
    breadcrumbItems.push({ label: currentItem.title, path: `/${NewsSection.slug}/${currentCategory?.slug || ''}/${currentItem.slug}` });
  }

  // Render Category Page
  if (currentCategory && !currentItem) {
    const categoryItems = NewsSection.items.filter(item => item.categoryId === currentCategory?.id);
    return (
      <main>
        <PageHeaderBlock title={currentCategory.name} settings={{ showBackground: false }} />
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />
          {currentCategory.description && (
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">{currentCategory.description}</p>
          )}
          {currentCategory.contentBlocks && currentCategory.contentBlocks.length > 0 && (
            <section aria-labelledby="category-intro">
              <BlockRenderer blocks={currentCategory.contentBlocks} />
            </section>
          )}

          <section aria-labelledby="category-items" className="mt-8">
            <h2 id="category-items" className="text-2xl font-bold text-gray-900 mb-6">{currentCategory.name} 相關文章</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {categoryItems.map(item => (
                <Link key={item.id} href={`/${NewsSection.slug}/${currentCategory?.slug || ''}/${item.slug}`} passHref>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    {item.image && (
                      <div className="relative w-full h-48">
                        <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{item.publishDate}</p>
                      {item.shortDescription && (
                        <p className="text-gray-700 text-base">{item.shortDescription}</p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    );
  }

  // Render Item Detail Page
  if (currentItem) {
    return (
      <main>
        <PageHeaderBlock title={currentItem.title} settings={{ showBackground: false }} />
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />
          <section aria-labelledby="item-content" className="mt-8">
            <h1 id="item-content" className="sr-only">{currentItem.title}</h1>
            <div className="text-gray-600 text-sm mb-4 text-center">發布日期: {currentItem.publishDate}</div>
            {currentItem.image && (
              <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden shadow-md">
                <Image src={currentItem.image} alt={currentItem.title} layout="fill" objectFit="cover" />
              </div>
            )}
            <BlockRenderer blocks={currentItem.contentBlocks} />
          </section>
        </div>
      </main>
    );
  }

  return notFound();
}

export async function generateStaticParams() {
  const paths: { slug: string[] }[] = [];

  // Add paths for categories
  NewsSection.categories.forEach(category => {
    paths.push({ slug: [category.slug] });
  });

  // Add paths for items within categories
  NewsSection.items.forEach(item => {
    const category = NewsSection.categories.find(cat => cat.id === item.categoryId);
    if (category) {
      paths.push({ slug: [category.slug, item.slug] });
    }
  });

  return paths;
}