module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "prettier"],
  env: {
    es6: true,
    node: true,
    jest: true
  },
  rules: {
    "prettier/prettier": "error",
  },
  plugins: ["prettier"],
  overrides: [
    {
      files: ["*.ts"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "eslint:recommended",
        "prettier",
      ],
    },
  ],
};
