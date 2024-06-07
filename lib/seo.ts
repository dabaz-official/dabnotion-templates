export const seo = {
  home: {
    title: "DabNotion - Premium Notion Templates",
    description: "A collection of premium Notion templates to boost productivity, organize projects, and enhance personal planning.",
    url: new URL(
      process.env.NODE_ENV === "production"
        ? "https://notion.dabaz.me"
        : "http://localhost:3000"
    ),
    imageSrc: "https://notion.dabaz.me/images/og.jpg",
    imageAlt: "DabNotion logo with 'DabNotion' on a white background.",
    siteName: "DabNotion",
  },
  store: {
    title: "Store",
    description: "Browse our collection of Notion templates.",
    imageSrc: "https://notion.dabaz.me/images/og.jpg",
    imageAlt: "DabNotion logo with 'DabNotion' on a white background.",
    siteName: "DabNotion",
  }
} as const;