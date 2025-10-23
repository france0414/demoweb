import { Product } from '@/app/types/entities';

export const mockProducts: Product[] = [
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    images: ['https://picsum.photos/1000/500'],
    shortDescription: '最新款旗艦手機，搭載A17 Pro晶片，攝影功能大幅提升。',
    fullDescription: 'iPhone 15 Pro 採用航太級鈦金屬設計，配備動作按鈕，以及 iPhone 歷來最先進的相機系統。',
    specifications: {
      processor: 'A17 Pro',
      display: '6.1吋超瓷晶盾面板',
      camera: '48MP主相機',
    },
    categoryIds: ['electronics', 'smartphones'],
    width: 1000, // Added width
    height: 500, // Added height
  },
  {
    id: 'samsung-galaxy-s24',
    name: 'Samsung Galaxy S24 Ultra',
    images: ['https://picsum.photos/1000/500'],
    shortDescription: 'AI手機新紀元，強大Galaxy AI功能，S Pen隨心所欲。',
    fullDescription: 'Galaxy S24 Ultra 搭載 Snapdragon 8 Gen 3 for Galaxy 處理器，具備多項創新 AI 功能，提供無與倫比的使用體驗。',
    specifications: {
      processor: 'Snapdragon 8 Gen 3',
      display: '6.8吋Dynamic AMOLED 2X',
      camera: '200MP廣角',
      storage: '256GB',
    },
    categoryIds: ['electronics', 'smartphones'],
    width: 1000, // Added width
    height: 500, // Added height
  },
  {
    id: 'macbook-pro-m3',
    name: 'MacBook Pro M3',
    images: ['https://picsum.photos/1000/500'],
    shortDescription: 'M3晶片帶來極致效能，專業人士首選。',
    fullDescription: '全新 MacBook Pro 搭載 M3 晶片，提供驚人的處理速度和電池續航力，是創意工作者的理想工具。',
    specifications: {
      processor: 'Apple M3 Pro',
      display: '14吋Liquid Retina XDR',
      ram: '18GB',
      storage: '512GB SSD',
    },
    categoryIds: ['electronics', 'laptops'],
    width: 1000, // Added width
    height: 500, // Added height
  },
  {
    id: 'dell-xps-15',
    name: 'Dell XPS 15',
    images: ['https://picsum.photos/1000/500'],
    shortDescription: '輕薄高效能筆電，設計師與開發者最愛。',
    fullDescription: 'Dell XPS 15 結合了精美的設計與強大的性能，配備 InfinityEdge 顯示器，提供沉浸式視覺體驗。',
    specifications: {
      processor: 'Intel Core i7',
      display: '15.6吋FHD+',
      ram: '16GB',
      storage: '1TB SSD',
    },
    categoryIds: ['electronics', 'laptops'],
    width: 1000, // Added width
    height: 500, // Added height
  },
  {
    id: 'smart-refrigerator',
    name: '智慧冰箱',
    images: ['https://picsum.photos/1000/500'],
    shortDescription: '具備AI食材管理功能，讓您的廚房更智慧。',
    fullDescription: '這款智慧冰箱不僅能保鮮，還能透過內建攝影機識別食材，並推薦食譜。',
    specifications: {
      capacity: '600L',
      features: 'AI食材管理、觸控螢幕',
    },
    categoryIds: ['home-appliances'],
    width: 1000, // Added width
    height: 500, // Added height
  },
  {
    id: 'robot-vacuum',
    name: '掃地機器人',
    images: ['https://picsum.photos/1000/800'],
    shortDescription: '自動規劃路徑，輕鬆打掃居家環境。',
    fullDescription: '配備雷射導航系統，精準繪製地圖，高效清潔，支援手機App遠端操控。',
    specifications: {
      batteryLife: '180分鐘',
      features: '雷射導航、自動回充',
      noiseLevel: '55dB',
    },
    categoryIds: ['home-appliances'],
    width: 1000, // Added width
    height: 800, // Added height
  },
];
