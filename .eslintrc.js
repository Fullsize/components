module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "standard-with-typescript",
    "plugin:storybook/recommended",
    "prettier",
  ],
  "overrides": [
    {
      "files": [
        "**/*.spec.*",
        "**/*.test.*"
      ],
      "env": {
        "jest": true
      }
    }
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  "plugins": [
    "react"
  ],
  rules: {
    "no-undef": "warn",
    "no-unused-vars": "warn",
    "no-duplicate-case": "warn",
    "no-case-declarations": "warn",
    "no-unsafe-optional-chaining": "warn",
    "no-extra-semi": "warn",
    "no-dupe-keys": "warn",
    "no-extra-boolean-cast": "warn",
    "no-unreachable": "warn",
    "react/prop-types": "warn",
    "react/jsx-no-duplicate-props": "warn",
    "react/jsx-key": "warn",
    "react/jsx-no-undef": "warn",
    "no-cond-assign": "warn",
    "no-const-assign": "warn",
    "react/no-unknown-property": "warn",
    "react/no-direct-mutation-state": "warn",
    "react/jsx-no-target-blank": "warn",
    "no-useless-escape": "warn",
    "valid-typeof": "warn",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/naming-convention": "warn",
    "eqeqeq": "warn",
    "@typescript-eslint/restrict-plus-operands": "warn",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/prefer-optional-chain": "off",
    "@typescript-eslint/restrict-template-expressions": "warn",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
    "@typescript-eslint/consistent-type-assertions": "warn",
    "no-sequences": "warn",
    "indent": [
      "off",
      4
    ],
    "@typescript-eslint/indent": [
      "off",
      4
    ],
    "eol-last": "warn"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};