/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Generates a static out/ directory with HTML/CSS/JS
  images: {
    unoptimized: true, // Required for static HTML exports
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.githubassets.com',
      },
      {
        protocol: 'https',
        hostname: '**.githubassets.com',
      },
    ],
  },
};

module.exports = nextConfig;
