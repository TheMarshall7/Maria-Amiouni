/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Ensure proper handling of client/server components
  reactStrictMode: true,
  // Fix for multiple lockfiles - explicitly set project root
  experimental: {
    turbo: {
      root: __dirname,
    },
  },
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Ensure proper transpilation
  transpilePackages: [],
  // Trailing slash for Cloudflare Pages
  trailingSlash: true,
};

module.exports = nextConfig;
