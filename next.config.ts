import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        hostname: 'raw.githubusercontent.com',
        pathname:
          '/marwin1991/profile-technology-icons/refs/heads/main/icons/**',
        port: '',
        protocol: 'https',
        search: '',
      },
      {
        hostname: 'img.shields.io',
        pathname: '/badge/**',
        protocol: 'https',
        port: '',
        search: '*',
      },
    ],
  },
}

export default nextConfig
