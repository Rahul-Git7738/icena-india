/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/edition5',
  images: {
    domains: [
      "cdn.builder.io",
      "firebasestorage.googleapis.com",
      "www.theiecna.com",
    ],
  },
};

// next.config.js

export default nextConfig;
