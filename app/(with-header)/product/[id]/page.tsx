import { notFound } from 'next/navigation';
import Image from 'next/image';
import { mockProducts } from '@/data/mock-products';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { Category, Product } from '@/app/types/entities';
import { mockCategories } from '@/data/mock-categories';
import InquiryCartButtonClient from '@/components/InquiryCartButton/InquiryCartButtonClient'; // New import

interface ProductDetailPageProps {
  params: {
    id: string; // Product ID
  };
}

// Helper function to build breadcrumbs for a product
function buildProductBreadcrumbs(product: Product): { label: string; path: string }[] {
  const breadcrumbs: { label: string; path: string }[] = [{ label: '首頁', path: '/' }];

  // Find the primary category for the product (or just the first one)
  const primaryCategoryId = product.categoryIds[0];
  if (primaryCategoryId) {
    let currentCategory: Category | undefined = mockCategories.find(cat => cat.id === primaryCategoryId);
    const categoryPathSegments: string[] = [];
    const tempBreadcrumbs: { label: string; path: string }[] = [];

    while (currentCategory) {
      categoryPathSegments.unshift(currentCategory.slug);
      tempBreadcrumbs.unshift({
        label: currentCategory.name,
        path: `/products/${categoryPathSegments.join('/')}`,
      });
      currentCategory = currentCategory.parentId ? mockCategories.find(cat => cat.id === currentCategory?.parentId) : undefined;
    }
    breadcrumbs.push(...tempBreadcrumbs);
  }

  // Add the product itself
  breadcrumbs.push({ label: product.name, path: `/product/${product.id}` });

  return breadcrumbs;
}


export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const productId = params.id;
  const product = mockProducts.find(p => p.id === productId);
  // const { addItem } = useInquiryCart(); // Removed hook usage

  if (!product) {
    notFound(); // If product not found, show 404 page
  }

  const breadcrumbItems = buildProductBreadcrumbs(product);

  // const handleAddToInquiry = () => { // Removed function
  //   addItem(product.id);
  //   alert(`${product.name} 已加入詢價車！`); // Simple feedback
  // };

  return (
    <main>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <section aria-labelledby="product-name" className="bg-white shadow-lg rounded-lg p-8 mt-8">
          <h1 id="product-name" className="text-3xl font-bold text-gray-900 mb-6">{product.name}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden shadow-md flex justify-center items-center bg-gray-50">
              <Image
                src={product.images[0] || '/placeholder-product.jpg'}
                alt={product.name}
                width={product.width || 800} // Use actual width or default
                height={product.height || 600} // Use actual height or default
                layout="intrinsic" // Display at actual size
                // objectFit="contain" // Removed
                // className="bg-gray-50" // Moved bg-gray-50 to parent div
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="text-gray-700 text-lg mb-4">{product.fullDescription}</p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-3">產品規格</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <li key={key}>
                      <span className="font-medium capitalize">{key}:</span> {value}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <InquiryCartButtonClient product={product} /> {/* Replaced with Client Component */}
              </div>
            </div>
          </div>
        </section>

        {/* Placeholder for related products or other sections */}
        <section aria-labelledby="related-products" className="mt-12">
          <h2 id="related-products" className="text-2xl font-bold text-gray-900 mb-6">相關產品</h2>
          {/* ProductGridList or a carousel of related products could go here */}
          <p className="text-gray-500">相關產品內容將在此處顯示。</p>
        </section>
      </div>
    </main>
  );
}

// Optional: Generate static paths for all products for SSG
export async function generateStaticParams() {
  return mockProducts.map(product => ({
    id: product.id,
  }));
}
