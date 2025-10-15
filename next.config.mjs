/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Optional: Add if you have basePath issues
  // basePath: '',
  // Optional: Add if you need asset prefix
  // assetPrefix: './',
};

export default nextConfig;