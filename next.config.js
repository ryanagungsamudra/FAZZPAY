/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    // formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // {
      //   protocol: 'http',
      //   hostname: 'localhost',
      //   port: '5000',
      //   pathname: '/uploads/images/**',
      // },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/deagxiwjt/**',
      },
    ],
  },
}

module.exports = nextConfig
