/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Tells Next.js to generate static HTML
  images: {
    unoptimized: true, // Required when using output: 'export'
    domains: ['github.githubassets.com'], // Kept your domain (made lowercase)
  },
};

module.exports = nextConfig;

