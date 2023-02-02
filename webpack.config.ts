import { BuildEnv } from "./config/build/types/config";
import path from "path";
import { buildWebpackConfig } from "./config/build";

export default (env: BuildEnv) => {
  const isDev = env.mode === "development";

  return buildWebpackConfig({
    mode: env.mode,
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      build: path.resolve(__dirname, "dist"),
      html: path.resolve(__dirname, "public", "index.html"),
    },
    isDev,
    port: +env.port,
  });
};
