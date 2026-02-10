const withFonts = require('next-fonts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  compiler: {
    styledComponents: true,
    removeConsole: false
  },
}

module.exports = withFonts(nextConfig)
