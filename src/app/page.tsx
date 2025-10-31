import HeroCarousel from "@/components/sections/HeroCarousel/HeroCarousel";
import { heroCarouselData } from "@/lib/hero-data"; // 從 hero-data.ts 導入 heroCarouselData

export default function Home() {
  return (
    <main>
      <HeroCarousel
        slides={heroCarouselData.slides}
        autoPlayInterval={heroCarouselData.autoPlayInterval}
        showNavigationArrows={heroCarouselData.showNavigationArrows}
        showIndicators={heroCarouselData.showIndicators}
        transitionType={heroCarouselData.transitionType}
      />
    </main>
  );
}
