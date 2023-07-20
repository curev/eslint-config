module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  reportUnusedDisableDirectives: true,
  extends: [
    "./standard",
    "plugin:import/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:jsonc/recommended-with-jsonc",
    "plugin:yml/standard",
    "plugin:markdown/recommended",
    "plugin:@curev/recommended"
  ],
  ignorePatterns: [
    "*.min.*",
    "*.d.ts",
    "CHANGELOG.md",
    "dist",
    "LICENSE*",
    "output",
    "coverage",
    "public",
    "temp",
    "package-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "__snapshots__",
    "!.github",
    "!.vitepress",
    "!.vscode"
  ],
  plugins: [
    "html",
    "unicorn",
    "unused-imports",
    "no-only-tests",
    "react"
  ],
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".mjs"] }
    }
  },
  overrides: [
    {
      files: ["*.json", "*.json5"],
      parser: "jsonc-eslint-parser",
      rules: {
        "jsonc/array-bracket-spacing": ["error", "never"],
        "jsonc/comma-dangle": ["error", "never"],
        "jsonc/comma-style": ["error", "last"],
        "jsonc/indent": ["error", 2],
        "jsonc/key-spacing": ["error", { beforeColon: false, afterColon: true }],
        "jsonc/no-octal-escape": "error",
        "jsonc/object-curly-newline": ["error", { multiline: true, consistent: true }],
        "jsonc/object-curly-spacing": ["error", "always"],
        "jsonc/object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }]
      }
    },
    {
      files: ["*.yaml", "*.yml"],
      parser: "yaml-eslint-parser",
      rules: {
        "spaced-comment": "off"
      }
    },
    {
      files: ["package.json"],
      parser: "jsonc-eslint-parser",
      rules: {
        "jsonc/sort-keys": [
          "error",
          {
            pathPattern: "^$",
            order: [
              "publisher",
              "name",
              "displayName",
              "type",
              "version",
              "private",
              "packageManager",
              "description",
              "author",
              "license",
              "funding",
              "homepage",
              "repository",
              "bugs",
              "keywords",
              "categories",
              "sideEffects",
              "exports",
              "main",
              "module",
              "unpkg",
              "jsdelivr",
              "types",
              "typesVersions",
              "bin",
              "icon",
              "files",
              "engines",
              "activationEvents",
              "contributes",
              "scripts",
              "peerDependencies",
              "peerDependenciesMeta",
              "dependencies",
              "optionalDependencies",
              "devDependencies",
              "pnpm",
              "overrides",
              "resolutions",
              "husky",
              "simple-git-hooks",
              "lint-staged",
              "eslintConfig"
            ]
          },
          {
            pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$",
            order: { type: "asc" }
          },
          {
            pathPattern: "^exports.*$",
            order: [
              "types",
              "require",
              "import"
            ]
          }
        ]
      }
    },
    {
      files: ["*.d.ts"],
      rules: {
        "import/no-duplicates": "off"
      }
    },
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off"
      }
    },
    {
      files: ["scripts/**/*.*", "cli.*"],
      rules: {
        "no-console": "off"
      }
    },
    {
      files: ["*.test.ts", "*.test.js", "*.spec.ts", "*.spec.js"],
      rules: {
        "no-unused-expressions": "off",
        "no-only-tests/no-only-tests": "error"
      }
    },

    {
      files: ["*.test.ts", "*.test.js", "*.spec.ts", "*.spec.js"],
      rules: {
        "no-unused-expressions": "off",
        "no-only-tests/no-only-tests": "error"
      }
    },
    {
      // Code blocks in markdown file
      files: ["**/*.md/*.*"],
      rules: {
        "@typescript-eslint/no-redeclare": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/comma-dangle": "off",
        "import/no-unresolved": "off",
        "no-alert": "off",
        "no-console": "off",
        "no-restricted-imports": "off",
        "no-undef": "off",
        "no-unused-expressions": "off",
        "no-unused-vars": "off",
        "unused-imports/no-unused-imports": "off",
        "unused-imports/no-unused-vars": "off"
      }
    },
    {
      files: ["**/*.vue", "**/*.jsx", "**/*.tsx"],
      rules: {
        "react/jsx-closing-bracket-location": ["error", "line-aligned"],
        "react/jsx-closing-tag-location": ["error"],
        "react/jsx-curly-spacing": ["error", {
          when: "never",
          children: true,
          attributes: {
            allowMultiline: false
          },
          spacing: { objectLiterals: "never" }
        }],
        "react/jsx-curly-brace-presence": [
          "error",
          {
            props: "never",
            children: "never"
          }
        ],
        "react/jsx-curly-newline": [
          "error",
          {
            multiline: "consistent",
            singleline: "consistent"
          }
        ],
        "react/jsx-boolean-value": ["error", "never"],
        "react/jsx-equals-spacing": ["error", "never"],
        "react/jsx-sort-props": [
          "error", {
            callbacksLast: true
          }
        ],
        "react/jsx-tag-spacing": [
          "error",
          {
            closingSlash: "never",
            beforeSelfClosing: "always",
            afterOpening: "never",
            beforeClosing: "never"
          }
        ],
        "react/jsx-max-props-per-line": [
          "error", {
            maximum: 1,
            when: "multiline"
          }
        ],
        "react/jsx-wrap-multilines": [
          "error",
          {
            declaration: "parens-new-line",
            assignment: "parens-new-line",
            return: "parens-new-line",
            arrow: "parens-new-line",
            condition: "parens-new-line",
            logical: "parens-new-line",
            prop: "parens-new-line"
          }
        ],
        "react/jsx-one-expression-per-line": [
          "error",
          { allow: "single-child" }
        ]
      }
    }
  ],
  rules: {
    // import
    "import/order": "error",
    "import/first": "error",
    "import/no-mutable-exports": "error",
    "import/no-unresolved": "off",
    "import/no-absolute-path": "off",

    // Common
    "semi": ["error", "always"],
    "curly": ["error", "all"],
    "quotes": ["error", "double"],
    "quote-props": ["error", "consistent-as-needed"],
    "no-param-reassign": "off",
    "array-bracket-spacing": ["error", "never"],
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "block-spacing": ["error", "always"],
    "comma-spacing": ["error", { before: false, after: true }],
    "comma-style": ["error", "last"],
    "comma-dangle": ["error", "never"],
    "no-constant-condition": "warn",
    "no-debugger": "error",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-cond-assign": ["error", "always"],
    "func-call-spacing": ["error", "never"],
    "key-spacing": ["error", { beforeColon: false, afterColon: true }],
    "indent": ["error", 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
    "no-restricted-syntax": [
      "error",
      "DebuggerStatement",
      "LabeledStatement",
      "WithStatement"
    ],
    "object-curly-spacing": ["error", "always"],
    "no-return-await": "off",
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always"
      }
    ],
    "max-statements-per-line": "off",

    // es6
    "no-var": "error",
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: true
      }
    ],
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }
    ],
    "object-shorthand": [
      "error",
      "always",
      {
        ignoreConstructors: false,
        avoidQuotes: true
      }
    ],
    "prefer-exponentiation-operator": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "template-curly-spacing": "error",
    "generator-star-spacing": "off",
    "spaced-comment": ["error", "always", {
      line: {
        markers: ["/", "#region", "#endregion", "region", "endregion"],
        exceptions: ["/"]
      },
      block: {
        markers: ["!"],
        exceptions: ["*"],
        balanced: true
      }
    }],

    // best-practice
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "consistent-return": "off",
    "complexity": ["off", 11],
    "eqeqeq": ["error", "smart"],
    "no-alert": "warn",
    "no-case-declarations": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-with": "error",
    "no-void": "error",
    "no-useless-escape": "off",
    "vars-on-top": "error",
    "require-await": "off",
    "no-return-assign": "off",
    "operator-linebreak": ["error", "before"],

    // unicorns


    "unicorn/better-regex": "error",

    // Pass error message when throwing errors
    "unicorn/error-message": "error",
    // Uppercase regex escapes
    "unicorn/escape-case": "error",
    // Array.isArray instead of instanceof
    "unicorn/no-instanceof-array": "error",
    // Prevent deprecated `new Buffer()`
    "unicorn/no-new-buffer": "error",

    // Keep regex literals safe!
    "unicorn/no-unsafe-regex": "off",
    // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
    "unicorn/number-literal-case": "error",
    // includes over indexOf when checking for existence
    "unicorn/prefer-includes": "error",
    // String methods startsWith/endsWith instead of more complicated stuff
    "unicorn/prefer-string-starts-ends-with": "error",
    // textContent instead of innerText
    "unicorn/prefer-text-content": "error",
    // Enforce throwing type error when throwing error while checking typeof
    "unicorn/prefer-type-error": "error",

    "unicorn/prefer-node-protocol": "error",

    "unicorn/prefer-trim-start-end": "error",

    "unicorn/prefer-ternary": "error",

    "unicorn/prefer-switch": "error",

    "unicorn/prefer-string-slice": "error",

    "unicorn/prefer-query-selector": "error",

    "unicorn/prefer-object-from-entries": "error",

    "unicorn/prefer-number-properties": "error",

    "unicorn/prefer-modern-dom-apis": "error",

    "unicorn/prefer-modern-math-apis": "error",

    "unicorn/prefer-code-point": "error",

    "unicorn/prefer-at": "error",

    "unicorn/prefer-math-trunc": "error",

    "unicorn/prefer-logical-operator-over-ternary": "warn",

    "unicorn/template-indent": "error",

    "unicorn/require-number-to-fixed-digits-argument": "error",

    // Use new when throwing error
    "unicorn/throw-new-error": "error",

    "unicorn/no-array-push-push": "error",

    "unicorn/no-lonely-if": "error",


    "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" }
    ],
    "no-use-before-define": ["error", { functions: false, classes: false, variables: true }],
    "eslint-comments/disable-enable-pair": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "import/namespace": "off",
    "n/no-callback-literal": "off",

    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: false
      }
    ],

    // yml
    "yml/quotes": ["error", { prefer: "single", avoidEscape: false }],
    "yml/no-empty-document": "off"

  }
};
