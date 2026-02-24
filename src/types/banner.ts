export interface BannerImages {
  desktop: string;
  tablet?: string;
  mobile?: string;
}

export interface BannerData {
  id: string;
  images: BannerImages;
  linkUrl: string;
}
