import HeroCarousel from "@/components/sections/HeroCarousel/HeroCarousel";
import { HeroSectionProps } from "@/components/sections/Hero/Hero";

// Example 1: Default (Image) + Video
const carousel1Slides: HeroSectionProps[] = [
  {
    variant: "default",
    title: "範例一：實際圖片輪播",
    description: "這是一個使用實際圖片（contain 模式）的範例。",
    desktopImageUrl: "https://picsum.photos/1920/800?random=10",
    imageWidth: 1920,
    imageHeight: 800,
    imageDisplayMode: "contain",
    textLayout: "overlay",
    textHorizontalAlign: "center",
    textVerticalAlign: "center",
    buttons: [{ text: "了解更多", link: "#", variant: "default" }],
    headingLevel: "h1",
  },
  {
    variant: "video",
    title: "範例一：影片輪播",
    description: "這是一個影片輪播，展示產品的動態效果。",
    desktopImageUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    imageDisplayMode: "cover",
    textLayout: "overlay",
    textHorizontalAlign: "left",
    textVerticalAlign: "center",
    buttons: [{ text: "立即觀看", link: "#", variant: "default" }],
    headingLevel: "h2",
  },
];

// Example 2: Split Layout
const carousel2Slides: HeroSectionProps[] = [
  {
    variant: "split",
    title: "範例二：分割佈局一",
    description: "左側為文字，右側為圖片的分割佈局。",
    desktopImageUrl: "https://picsum.photos/800/600?random=11",
    imageWidth: 800,
    imageHeight: 600,
    imageDisplayMode: "inline",
    textLayout: "separate",
    textHorizontalAlign: "left",
    textVerticalAlign: "center",
    buttons: [{ text: "探索功能", link: "#", variant: "default" }],
    headingLevel: "h3",
  },
  {
    variant: "split",
    title: "範例二：分割佈局二",
    description: "這是第二個分割佈局的輪播，提供更多資訊。",
    desktopImageUrl: "https://picsum.photos/800/600?random=12",
    imageWidth: 800,
    imageHeight: 600,
    imageDisplayMode: "inline",
    textLayout: "separate",
    textHorizontalAlign: "left",
    textVerticalAlign: "center",
    buttons: [{ text: "深入了解", link: "#", variant: "default" }],
    headingLevel: "h2",
  },
];

// Example 3: Default (Background Image) + Video
const carousel3Slides: HeroSectionProps[] = [
  {
    variant: "default",
    title: "範例三：背景圖片輪播",
    description: "這是一個使用背景圖片（cover 模式）的範例。",
    desktopImageUrl: "https://picsum.photos/1920/1080?random=13",
    imageWidth: 1920,
    imageHeight: 1080,
    imageDisplayMode: "cover",
    textLayout: "overlay",
    textHorizontalAlign: "right",
    textVerticalAlign: "center",
    buttons: [{ text: "立即開始", link: "#", variant: "default" }],
    headingLevel: "h2",
  },
  {
    variant: "video",
    title: "範例三：影片輪播",
    description: "結合背景圖片與影片，創造豐富的視覺體驗。",
    desktopImageUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    imageDisplayMode: "cover",
    textLayout: "overlay",
    textHorizontalAlign: "center",
    textVerticalAlign: "center",
    buttons: [{ text: "觀看教學", link: "#", variant: "default" }],
    headingLevel: "h2",
  },
];

export default function HeroCarouselExamplePage() {
  return (
    <main className="space-y-8 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">範例一：實際圖片 (contain) + 影片</h2>
        <HeroCarousel slides={carousel1Slides} transitionType="slide" />
      </div>

      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">範例二：分割佈局 (split)</h2>
        <HeroCarousel slides={carousel2Slides} transitionType="slide" />
      </div>

      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">範例三：背景圖片 (cover) + 影片</h2>
        <HeroCarousel slides={carousel3Slides} transitionType="fade" />
      </div>
    </main>
  );
}
