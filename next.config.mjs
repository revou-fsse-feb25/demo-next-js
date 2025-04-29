/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Configure images if needed
  images: {
    domains: [],
  },
  
  // Other Next.js configuration options
  swcMinify: true,
};

export default nextConfig;
