/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  productionBrowserSourceMaps: false,
  // Support PWA
  headers: async () => {
    return [
      {
        source: '/manifest.json',
        headers: [{ key: 'Content-Type', value: 'application/manifest+json' }],
      },
      {
        source: '/service-worker.js',
        headers: [{ key: 'Content-Type', value: 'application/javascript' }],
      },
    ];
  },
};

module.exports = nextConfig;
