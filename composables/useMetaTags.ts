export const useMetaTags = (
  title: string, 
  description: string, 
  image?: string
) => {
  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      ...(image ? [{ property: 'og:image', content: image }] : []),
      { property: 'og:type', content: 'website' },
      // Twitter Card
      { name: 'twitter:card', content: image ? 'summary_large_image' : 'summary' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      ...(image ? [{ name: 'twitter:image', content: image }] : [])
    ]
  });
};
