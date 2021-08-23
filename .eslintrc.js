module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    // "ecmaVersion": 2021, // The version of ECMAScript you are using
    // "sourceType": "module", // Enables ECMAScript modules
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "settings": {
    "react": {
      "version": "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  "extends": [
    "eslint:all",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "next",
    "next/core-web-vitals"
  ],
  "plugins": [
    "@typescript-eslint",
    "eslint-plugin-react",
    "eslint-plugin-react-hooks"
  ],
  "rules": {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "args": "none" }],
    "array-element-newline": "off",
    "arrow-parens": ["error", "as-needed"],
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "capitalized-comments": ["error", "never", {
      "ignorePattern": ".*"
    }],
    "curly": ["error", "multi-line"],
    "default-param-last": "off",
    "dot-location": ["error", "property"],
    "function-call-argument-newline": ["error", "consistent"],
    "function-paren-newline": "off",
    "id-length": "off",
    "indent": ["error", 2, {
      "SwitchCase": 1,
      "VariableDeclarator": 1,
      "outerIIFEBody": 1,
      "MemberExpression": 1,
      "FunctionDeclaration": { "parameters": 1, "body": 1 },
      "FunctionExpression": { "parameters": 1, "body": 1 },
      "CallExpression": { "arguments": 1 },
      "ArrayExpression": 1,
      "ObjectExpression": 1,
      "ImportDeclaration": 1,
      "flatTernaryExpressions": false,
      "ignoreComments": false
    }],
    "implicit-arrow-linebreak": "off",
    "line-comment-position": "off",
    "max-len": ["error", {
      "code": 100,
      "tabWidth": 2,
      "ignoreComments": true,
      "ignoreTrailingComments": true,
      "ignoreUrls": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true
    }],
    "max-nested-callbacks": ["error", 3],
    "multiline-comment-style": "off",
    "multiline-ternary": ["error", "always-multiline"],
    "no-extra-parens": ["error", "functions"],
    "no-inline-comments": "off",
    "no-plusplus": "off",
    "no-return-await": "off",
    "no-ternary": "off",
    "no-trailing-spaces": ["error", { "ignoreComments": true }],
    "no-unused-variable": "off",
    "no-use-before-define": "off",
    "no-warning-comments": "off",
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
    "one-var": "off",
    "padded-blocks": "off",
    "prefer-const": "off",
    "quotes": ["error", "single", {
      "avoidEscape": true,
      "allowTemplateLiterals": true }
    ],
    "quote-props": ["error", "as-needed"],
    "sort-keys": "off",
    "sort-imports": "off",
    "space-before-function-paren": "off",
  }
};
