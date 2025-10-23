import { PageHeaderBlock } from '@/components/PageHeaderBlock/PageHeaderBlock';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { mockCategories } from '@/data/mock-categories';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductsLandingPage() {
  const topLevelCategories = mockCategories.filter(cat => cat.parentId === null);

  const breadcrumbItems = [{ label: '首頁', path: '/' }, { label: '產品中心', path: '/products' }];

  return (
    <main>
      <PageHeaderBlock title="產品中心" settings={{ showBackground: true, backgroundColor: '#e0f7fa' }} />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <section aria-labelledby="top-categories-heading" className="mt-8">
          <h2 id="top-categories-heading" className="text-3xl font-bold text-gray-900 mb-6 text-center">探索我們的產品類別</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topLevelCategories.map(category => (
              <Link href={`/products/${category.slug}`} key={category.id} className="block">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                  <div className="relative w-full h-48">
                    <Image
                      src={category.banner?.backgroundImage || 'https://via.placeholder.com/400x300?text=Category+Image'}
                      alt={category.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
                    <p className="text-gray-600 text-sm mt-2">點擊查看更多 {category.name} 產品</p>
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
