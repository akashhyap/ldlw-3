export default async function sitemap() {
  const baseURL = "https://liedownloseweight.vercel.app";
  return [
    {
      url: baseURL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: baseURL + "/how-does-it-works",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: baseURL + "/vision",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: baseURL + "/offers",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: baseURL + "/become-a-partner",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: baseURL + "/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: baseURL + "/legal-notice-privacy-policy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    }
  ];
}
