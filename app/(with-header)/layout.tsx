import HeaderBlock from '@/components/HeaderBlock/HeaderBlock';
import { PrimaryNavigation } from '@/data/navigation';
import { defaultHeaderData } from '@/data/headerContent';

export default function WithHeaderLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderBlock version="default" data={defaultHeaderData} navigationData={PrimaryNavigation} />
      {children}
    </>
  );
}
