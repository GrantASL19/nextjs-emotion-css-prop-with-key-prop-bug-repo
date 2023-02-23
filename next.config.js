/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: {
      // Disabled to reduce size of console.log — has no effect on bug
      sourceMap: false
    },
  },
  reactStrictMode: true,
}

module.exports = nextConfig
