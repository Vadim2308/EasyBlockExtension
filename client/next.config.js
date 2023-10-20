/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites() {
    return [
      { source: "/api/:path*", destination: "http://localhost:3001/:path*" }, // Прокирование, чтоб не ругался CORS. Обычные редиректы, которые можно прописать
    ];
  },
};

module.exports = nextConfig;
