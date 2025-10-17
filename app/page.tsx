import BlockRenderer from '@/components/BlockRenderer';
import { HomePageConfig, BlockConfig } from '@/public/config/home'; // 直接從 TypeScript 檔案匯入配置

export default async function Home() {
  // 直接使用從 HomePageConfig 匯入的 blocks
  const blocks = HomePageConfig.blocks;

  return (
    <main className="min-h-screen">
      {blocks.map((block: BlockConfig, index: number) => (
        <BlockRenderer key={index} block={block} />
      ))}

      <div className="container mx-auto p-8 text-center mt-12">
        <h1 className="text-3xl font-bold">頁面結構完全由 TypeScript 配置控制！</h1>
      </div>
    </main>
  );
}
