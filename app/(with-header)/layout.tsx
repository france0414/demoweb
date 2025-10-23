import HeaderBlock from '@/components/HeaderBlock/HeaderBlock';
import { getPrimaryNavigation } from '@/data/navigation'; // Changed import
import { defaultHeaderData } from '@/data/headerContent';
import { mockCategories } from '@/data/mock-categories'; // New import

export default function WithHeaderLayout({ children }: { children: React.ReactNode }) {
  const navigationData = getPrimaryNavigation(mockCategories); // Dynamically get navigation data
  return (
    <>
      <HeaderBlock version="default" data={defaultHeaderData} navigationData={navigationData} />
      {children}
    </>
  );
}
