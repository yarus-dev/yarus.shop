const baseUrl =
  process.env.NODE_ENV === "production"
    ? `https://${process.env.HOST}`
    : "http://localhost:3000";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
