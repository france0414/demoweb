import { Product } from '@/app/types/entities';
import { LayoutSettings } from '@/app/types/settings';
import { ProductCard } from './ProductCard';

interface ProductGridListProps {
  products: Product[];
  layoutSettings: LayoutSettings;
}

export function ProductGridList({ products, layoutSettings }: ProductGridListProps) {
  if (!products || products.length === 0) {
    return <p className="text-center text-gray-500">目前沒有產品可供顯示。</p>;
  }

  const isVerticalCardLayout = layoutSettings.view === 'grid'; // 'grid' implies vertical card layout

  // Determine responsive grid classes
  const mobileCols = layoutSettings.mobileColumns || 1; // Default to 1 for mobile
  const tabletCols = layoutSettings.tabletColumns || 2; // Default to 2 for tablet
  const desktopCols = layoutSettings.desktopColumns;

  const gridClasses = `grid-cols-${mobileCols} md:grid-cols-${tabletCols} lg:grid-cols-${desktopCols}`;

  return (
    <div className={`grid ${gridClasses} gap-6 `}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          layout={isVerticalCardLayout ? 'vertical' : 'horizontal'}
        />
      ))}
    </div>
  );}
