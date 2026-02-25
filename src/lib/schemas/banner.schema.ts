import { z } from "zod";

export const BaseBannerSchema = z.object({
  id: z.uuid(),
  title: z.string(),
  image_desktop_url: z.string(),
  image_tablet_url: z.string(),
  image_mobile_url: z.string(),
  target_url: z.string(),
  created_at: z.string(),
});

export const BannerSchema = BaseBannerSchema
  .transform(({ image_desktop_url, image_tablet_url, image_mobile_url, ...rest }) => ({
    ...rest,
    images: {
      desktop: image_desktop_url,
      tablet: image_tablet_url,
      mobile: image_mobile_url,
    },
  }));
