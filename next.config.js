/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: 'l231sayctk2k',
    CONTENTFUL_ACCESS_KEY: '9yjoQZiX2VCSrTyBzI3kuewcQxVvuFKvyl0YK_DDrCk',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
