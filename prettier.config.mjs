/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  arrowParens: "always",
  printWidth: 80,
  singleQuote: false,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: "all",
  tabWidth: 2,
  plugins: [
    "prettier-plugin-tailwindcss",
    "prettier-plugin-css-order",
    "prettier-plugin-organize-imports",
  ],
};

export default config;
