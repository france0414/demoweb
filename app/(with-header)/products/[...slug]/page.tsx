import { notFound } from 'next/navigation';
import { PageHeaderBlock } from '@/components/PageHeaderBlock/PageHeaderBlock';
import { BlockRenderer } from '@/components/BlockRenderer/BlockRenderer';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { ProductGridList } from '@/components/ProductListBlock/ProductGridList';

import { Category, Product } from '@/app/types/entities';
import { mockCategories } from '@/data/mock-categories';
import { mockProducts } from '@/data/mock-products';
import { productPageContent } from '@/data/product-page-content';

interface CategoryPageProps {
  params: {
    slug: string[]; // e.g., ['electronics', 'smartphones']
  };
}

// Helper function to find a category by its slug path
function findCategoryBySlug(slugPath: string[]): Category | undefined {
  let currentCategories: Category[] = mockCategories.filter(cat => cat.parentId === null);
  let foundCategory: Category | undefined;

  for (const slugPart of slugPath) {
    const nextCategory = currentCategories.find(cat => cat.slug === slugPart);
    if (!nextCategory) {
      return undefined; // Path not found
    }
    foundCategory = nextCategory;
    currentCategories = mockCategories.filter(cat => cat.parentId === foundCategory?.id);
  }
  return foundCategory;
}

// Helper function to get all products for a category (and its subcategories)
function getProductsForCategory(categoryId: string): Product[] {
  const categoryAndSubCategoryIds: string[] = [categoryId];

  // Recursively find all subcategory IDs
  const findSubCategoryIds = (parentId: string) => {
    const subCategories = mockCategories.filter(cat => cat.parentId === parentId);
    subCategories.forEach(subCat => {
      categoryAndSubCategoryIds.push(subCat.id);
      findSubCategoryIds(subCat.id);
    });
  };
  findSubCategoryIds(categoryId);

  return mockProducts.filter(product =>
    product.categoryIds.some(prodCatId => categoryAndSubCategoryIds.includes(prodCatId))
  );
}

// Helper function to build breadcrumbs
function buildBreadcrumbs(category: Category): { label: string; path: string }[] {
  const breadcrumbs: { label: string; path: string }[] = [];
  let current: Category | undefined = category;
  let pathSegments: string[] = [];

  while (current) {
    pathSegments.unshift(current.slug);
    breadcrumbs.unshift({
      label: current.name,
      path: `/products/${pathSegments.join('/')}`,
    });
    current = current.parentId ? mockCategories.find(cat => cat.id === current?.parentId) : undefined;
  }

  // Add home link
  breadcrumbs.unshift({ label: productPageContent.home, path: '/' });

  // Insert '產品中心' after '首頁' if it's a product category page
  if (breadcrumbs.length > 1 && breadcrumbs[1].path.startsWith('/products')) {
    breadcrumbs.splice(1, 0, { label: productPageContent.productCenter, path: '/products' });
  }

  return breadcrumbs;
}


export default function CategoryPage({ params }: CategoryPageProps) {
  const slugPath = params.slug;
  const category = findCategoryBySlug(slugPath);

  if (!category) {
    notFound(); // If category not found, show 404 page
  }

  const products = getProductsForCategory(category.id);
  const breadcrumbItems = buildBreadcrumbs(category);

  return (
    <main>
      <PageHeaderBlock title={category.name} settings={category.banner} />

      <div className="container max-w-7xl mx-auto px-4">
        <Breadcrumbs items={breadcrumbItems} />

        {category.contentBlocks && category.contentBlocks.length > 0 && (
          <section aria-labelledby="category-intro">
            <h2 id="category-intro" className="sr-only">{category.name} {productPageContent.introduction}</h2>
            <BlockRenderer blocks={category.contentBlocks} />
          </section>
        )}

        <section aria-labelledby="category-products" className="mt-8">
          <h2 id="category-products" className="sr-only">{category.name} {productPageContent.productList}</h2>
          <ProductGridList products={products} layoutSettings={category.layout} />
        </section>
      </div>
    </main>
  );
}

// Optional: Generate static paths for all categories for SSG
export async function generateStaticParams() {
  const paths: { slug: string[] }[] = [];

  function generatePathsRecursive(categories: Category[], currentPath: string[] = []) {
    categories.forEach(cat => {
      const newPath = [...currentPath, cat.slug];
      paths.push({ slug: newPath });
      const subCategories = mockCategories.filter(sub => sub.parentId === cat.id);
      if (subCategories.length > 0) {
        generatePathsRecursive(subCategories, newPath);
      }
    });
  }

  generatePathsRecursive(mockCategories.filter(cat => cat.parentId === null));
  return paths;
}
