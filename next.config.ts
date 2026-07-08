import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.svg": [
        // `import x from "./foo.svg?url"` returns the asset URL, for use with
        // `next/image` (e.g. `<Image src={x} fill />`).
        {
          condition: { query: /url/ },
          type: "asset",
        },
        // Every other `.svg` import becomes a React component via @svgr/webpack
        // (e.g. `import Icon from "./ic.svg"` -> `<Icon />`).
        {
          condition: { not: { query: /url/ } },
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      ],
    },
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
