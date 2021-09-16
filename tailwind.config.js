const inProduction = process.env.NODE_ENV == "production";

module.exports = {
  purge: { enabled: inProduction, content: ["*.html"] },
  theme: {},
  variants: {},
  plugins: [],
};
