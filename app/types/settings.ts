export interface LayoutSettings {
  view: 'grid' | 'list'; // grid = 圖上文下, list = 圖左文右
  desktopColumns: 2 | 3 | 4;
  tabletColumns?: 2 | 3; // Optional: defaults to 2 if not provided
  mobileColumns?: 1 | 2; // Optional: defaults to 1 if not provided
}

export interface BannerSettings {
  showBackground: boolean;
  backgroundImage?: string;
  backgroundColor?: string;
}
