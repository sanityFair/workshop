import path from "path";
import { Configuration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export const buildDevServer = (options: BuildOptions): Configuration => ({
  port: options.port,
  open: false,
  historyApiFallback: true,
  https: {
    cert: path.resolve(__dirname, "../../cert.pem"),
    key: path.resolve(__dirname, "../../key.pem"),
    passphrase: "ququ",
  },
});
