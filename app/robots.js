const baseUrl =
  process.env.NODE_ENV === "production"
    ? `https://www.yarus.shop`
    : "http://localhost:3000";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: "/",
      },
    ],
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
