import { HeroCarouselProps } from "@/components/sections/HeroCarousel/HeroCarousel";
import { HeroSectionProps } from "@/components/sections/Hero/Hero";

export const heroData: HeroSectionProps[] = [
  {
    variant: 'default',
    title: "Modern B2B Solutions",
    description: "We help you to grow your business with our innovative solutions.",
    desktopImageUrl: "https://picsum.photos/1920/1080",
    imageWidth: 1920,
    imageHeight: 1080,
    imageDisplayMode: 'contain',
    textLayout: 'overlay',
    textHorizontalAlign: 'center',
    textVerticalAlign: 'center',
    buttons: [
      { text: "Get Started", link: "#", variant: 'default' },
      { text: "Learn More", link: "#", variant: 'outline' },
    ],
    enableContentArea: true,
    contentAreaSpacing: "mt-8",
    contentAreaBackgroundColor: "bg-gray-100 dark:bg-gray-900",
    contentAreaContent: [
      {
        type: "markdown",
        text: `## Our Services

We offer a wide range of services to help you grow your business. `
      }
    ]
  },
  {
    layout: 'split-left-text',
    title: "Data-driven Decisions",
    description: "Leverage your data to make better business decisions.",
    desktopImageUrl: "https://picsum.photos/800/500",
    imageWidth: 800,
    imageHeight: 500,
    buttons: [
      { text: "Request a Demo", link: "#", variant: 'default' },
    ]
  },
  {
    layout: 'video-overlay-bottom',
    title: "Engage Your Audience",
    description: "Create stunning visual experiences that captivate your audience.",
    desktopImageUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    buttons: [
      { text: "Watch Now", link: "#", variant: 'default' },
    ]
  },];

export const heroCarouselData: HeroCarouselProps = {
  slides: [
    {
      layout: 'overlay-center',
      title: "First Carousel Slide",
      description: "This is the first item in our carousel.",
      desktopImageUrl: "https://picsum.photos/1920/1081",
      buttons: [{ text: "Learn More", link: "#", variant: 'default' }],
    },
    {
      layout: 'overlay-center',
      title: "Second Carousel Slide",
      description: "Showcasing another key feature.",
      desktopImageUrl: "https://picsum.photos/1920/1082",
      textHorizontalAlign: 'right', // Override
      buttons: [{ text: "Explore", link: "#", variant: 'outline', align: 'left' }],
    },
    {
      layout: 'overlay-center',
      title: "Third Carousel Slide",
      description: "Contact us for more information.",
      desktopImageUrl: "https://picsum.photos/1920/1083",
      textHorizontalAlign: 'left', // Override
      textVerticalAlign: 'top', // Override
      buttons: [{ text: "Contact Us", link: "#", variant: 'default', align: 'left' }],
    }
  ],
  autoPlayInterval: 5500,
  transitionType: 'fade',
  showNavigationArrows: true,
};
