import type { NextConfig } from "next";
import "./src/config/env/client";
import "./src/config/env/server";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig = (
  phase: string,
  {
    defaultConfig,
  }: {
    defaultConfig: NextConfig;
  },
): NextConfig => ({
  ...defaultConfig,
  typescript: {
    tsconfigPath: "./tsconfig.build.json",
  },
  experimental: {
    typedRoutes: true,
    reactCompiler: true,
  },
  pageExtensions: ["ts", "tsx", "js", "jsx"].flatMap((extension) => {
    const isDevServer = phase === PHASE_DEVELOPMENT_SERVER;
    return isDevServer ? [`dev.${extension}`, extension] : extension;
  }),
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false, // 圧縮無効
          },
        },
      ],
    });

    return config;
  },
  images: {
    disableStaticImages: true, // importした画像の型定義設定を無効にする設定
  },
});

export default nextConfig;
