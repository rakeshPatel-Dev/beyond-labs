import { siteConfig } from "./site";

export const DefaultSEO = {
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
  twitter: {
    handle: "@beyondlabs",
    site: "@beyondlabs",
    cardType: "summary_large_image",
  },
};
