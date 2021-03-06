module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        // "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        // disable the rule for all files
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off"
      },
      "overrides": [
        {
          // enable the rule specifically for TypeScript files
          "files": [
            "**/*.ts", 
            "**/*.tsx",
            "**/*.spec.js",
            "**/*.spec.jsx"
          ],
          "rules": {
            "@typescript-eslint/explicit-module-boundary-types": ["error"]
          }
        }
      ]
};
