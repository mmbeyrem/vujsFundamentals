module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/airbnb"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    quotes: [2, "double", { avoidEscape: true }],
    "comma-dangle": ["error", {
      arrays: "never",
      objects: "never",
      imports: "never",
      exports: "never",
      functions: "never"
    }],
    "arrow-parens": [2, "as-needed"],
    "max-len": ["error", { "code": 160 }]
  }
};
