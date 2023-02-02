import { buildDevServer } from "./build-dev-server";
import { buildResolvers } from "./build-resolvers";
import { buildPlugins } from "./build-plugins";
import { buildLoaders } from "./build-loaders";
import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { paths, mode, port } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "main-[chunkhash].js",
      path: paths.build,
      clean: true,
      asyncChunks: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(options),
    devtool: "inline-source-map",
    devServer: buildDevServer(options),
  };
};
