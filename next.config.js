/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // image from brucket gcs
  images: {
    domains: ['storage.googleapis.com'],
  },
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback.fs = false;
  //   }
  //   return config;
  // }

}

module.exports = nextConfig
