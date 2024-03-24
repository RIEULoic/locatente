/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ap-south-1.graphassets.com",
        pathname: "/clu3n14x007ex07mscjyn8amr/**",
      },
    ],
  },
};
