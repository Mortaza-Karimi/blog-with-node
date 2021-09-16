const path = require("path");
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const inProduction = process.env.NODE_ENV == "production";
const tailwindcss = require("tailwindcss");
const ESLintPlugin = require("eslint-webpack-plugin");
const PurgeCSSPlugin = require("purgecss-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ALL_FILES = glob.sync(path.join(__dirname, "*.html"));

module.exports = {
  entry: {
    app: path.resolve(__dirname, "lib/app/index.js"),
    // css: glob.sync("./src/css/*.css"),
  },
  output: {
    path: path.resolve(__dirname, "./views/dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "app.css",
    }),
    require("autoprefixer"),
    require("postcss-nested"),
    new ESLintPlugin(),
    tailwindcss,
    // new PurgeCSSPlugin({
    //   paths: ALL_FILES, // Consider extracting as a parameter
    //   extractors: [
    //     {
    //       extractor: (content) =>
    //         content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
    //       extensions: ["html"],
    //     },
    //   ],
    // }),
  ],
  mode: inProduction ? "production" : "development",
  optimization: {
    minimizer: inProduction
      ? [new CssMinimizerPlugin(), new TerserPlugin()]
      : [],
  },
};
