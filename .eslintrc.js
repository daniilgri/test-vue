module.exports = {
  root: true,

  env: {
    node: true
  },

  parserOptions: {
    parser: "@typescript-eslint/parser"
  },

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  },

  extends: [
    "plugin:vue/essential",
    "plugin:@typescript-eslint/recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ]
};
