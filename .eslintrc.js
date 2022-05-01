module.exports = {
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
  },

  extends: ["eslint-config-web/typescript"],

  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
  },
};
