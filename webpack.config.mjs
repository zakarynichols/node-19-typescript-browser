import { resolve, join, dirname } from "path";
import { fileURLToPath } from "url";
import HTMLWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  mode: "development",
  entry: "./src/index.mjs",
  module: {
    rules: [
      {
        test: /\.([cm]?ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".js"],
    // Add support for TypeScripts fully qualified ESM imports.
    extensionAlias: {
      ".js": [".js", ".ts"],
      ".cjs": [".cjs", ".cts"],
      ".mjs": [".mjs", ".mts"],
    },
  },
  output: {
    filename: "[name].[contenthash].js",
    path: resolve(join(__dirname, "./public")),
    clean: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "ECMAScript Modules - Browser",
    }),
  ],
};
