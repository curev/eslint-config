import globals from "globals";

import type { FlatConfigItem, OptionsIsInEditor, OptionsOverrides } from "../types";

import { GLOB_SRC, GLOB_SRC_EXT } from "../globs";
import { pluginCurev, pluginUnusedImports } from "../plugins";

export async function javascript(
  options: OptionsIsInEditor & OptionsOverrides = {}
): Promise<FlatConfigItem[]> {
  const {
    isInEditor = false,
    overrides = {}
  } = options;

  return [
    {
      languageOptions: {
        ecmaVersion: 2022,
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
          document: "readonly",
          navigator: "readonly",
          window: "readonly"
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          ecmaVersion: 2022,
          sourceType: "module"
        },
        sourceType: "module"
      },
      linterOptions: {
        reportUnusedDisableDirectives: true
      },
      name: "curev:javascript",
      plugins: {
        "curev": pluginCurev,
        "unused-imports": pluginUnusedImports
      },
      rules: {
        "accessor-pairs": ["error", { enforceForClassMembers: true, setWithoutGet: true }],
        "array-callback-return": ["error", {
          allowImplicit: false,
          checkForEach: false
        }],

        "block-scoped-var": "error",
        "camelcase": ["error", {
          allow: ["^UNSAFE_"],
          ignoreGlobals: true,
          ignoreImports: true,
          properties: "never"
        }],
        "constructor-super": "error",
        "default-case-last": "error",
        "eol-last": "error",
        "eqeqeq": ["error", "always", { null: "ignore" }],
        "func-call-spacing": ["error", "never"],
        "generator-star-spacing": ["error", { after: true, before: true }],
        "import/export": "error",
        "import/first": "error",
        "import/no-absolute-path": ["error", { amd: false, commonjs: true, esmodule: true }],
        "import/no-duplicates": "error",
        "import/no-named-default": "error",
        "import/no-webpack-loader-syntax": "error",
        "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
        "multiline-ternary": ["error", "always-multiline"],
        "new-cap": ["error", { capIsNew: false, newIsCap: true, properties: true }],
        "new-parens": "error",
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-async-promise-executor": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-console": ["error", { allow: ["warn", "error"] }],
        "no-const-assign": "error",
        "no-constant-condition": ["error", { checkLoops: false }],
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty": ["error", { allowEmptyCatch: true }],
        "no-empty-character-class": "error",
        "no-empty-pattern": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-parens": ["error", "functions"],
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implied-eval": "error",
        "no-import-assign": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-iterator": "error",
        "no-labels": ["error", { allowLoop: false, allowSwitch: false }],
        "no-lone-blocks": "error",
        "no-loss-of-precision": "error",
        "no-misleading-character-class": "error",
        "no-mixed-operators": ["error", {
          allowSamePrecedence: true,
          groups: [
            ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
            ["&&", "||"],
            ["in", "instanceof"]
          ]
        }],
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-multiple-empty-lines": [
          "error",
          {
            max: 3,
            maxBOF: 0,
            maxEOF: 1
          }
        ],
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-symbol": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-proto": "error",
        "no-prototype-builtins": "error",
        "no-redeclare": ["error", { builtinGlobals: false }],
        "no-regex-spaces": "error",
        "no-restricted-globals": [
          "error",
          { message: "Use `globalThis` instead.", name: "global" },
          { message: "Use `globalThis` instead.", name: "self" }
        ],
        "no-restricted-properties": [
          "error",
          { message: "Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.", property: "__proto__" },
          { message: "Use `Object.defineProperty` instead.", property: "__defineGetter__" },
          { message: "Use `Object.defineProperty` instead.", property: "__defineSetter__" },
          { message: "Use `Object.getOwnPropertyDescriptor` instead.", property: "__lookupGetter__" },
          { message: "Use `Object.getOwnPropertyDescriptor` instead.", property: "__lookupSetter__" }
        ],
        "no-restricted-syntax": [
          "error",
          "DebuggerStatement",
          "LabeledStatement",
          "WithStatement",
          "TSEnumDeclaration[const=true]",
          "TSExportAssignment"
        ],
        "no-return-assign": ["error", "except-parens"],
        "no-self-assign": ["error", { props: true }],
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-tabs": "error",
        "no-template-curly-in-string": "error",
        "no-this-before-super": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": [
          "error",
          {
            skipBlankLines: true
          }
        ],
        "no-undef": "error",
        "no-undef-init": "error",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": ["error", { defaultAssignment: false }],
        "no-unreachable": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unused-expressions": ["error", {
          allowShortCircuit: true,
          allowTaggedTemplates: true,
          allowTernary: true
        }],
        "no-unused-vars": ["error", {
          args: "none",
          caughtErrors: "none",
          ignoreRestSiblings: true,
          vars: "all"
        }],
        "no-use-before-define": ["error", { classes: false, functions: false, variables: false }],
        "no-useless-backreference": "error",
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-escape": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "warn",
        "no-void": "error",
        "no-with": "error",
        "object-curly-newline": ["error", { consistent: true, multiline: true }],
        "object-curly-spacing": ["error", "always"],
        "object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }],
        "object-shorthand": ["warn", "properties"],
        "one-var": ["error", { initialized: "never" }],
        "padded-blocks": ["error", { blocks: "never", classes: "never", switches: "never" }],
        "prefer-arrow-callback": [
          "error",
          {
            allowNamedFunctions: false,
            allowUnboundThis: true
          }
        ],

        "prefer-const": ["error", { destructuring: "all" }],
        "prefer-exponentiation-operator": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
        "prefer-rest-params": "error",
        "prefer-spread": "error",

        "prefer-template": "error",
        "rest-spread-spacing": ["error", "never"],
        "sort-imports": [
          "error",
          {
            allowSeparatedGroups: false,
            ignoreCase: false,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ["none", "all", "multiple", "single"]
          }
        ],
        "symbol-description": "error",
        "template-curly-spacing": ["error", "never"],
        "template-tag-spacing": ["error", "never"],
        "unicode-bom": ["error", "never"],
        "unused-imports/no-unused-imports": isInEditor ? "off" : "error",
        "unused-imports/no-unused-vars": [
          "error",
          { args: "after-used", argsIgnorePattern: "^_", vars: "all", varsIgnorePattern: "^_" }
        ],
        "use-isnan": ["error", {
          enforceForIndexOf: true,
          enforceForSwitchCase: true
        }],
        "valid-typeof": ["error", { requireStringLiterals: true }],
        "vars-on-top": "error",

        "wrap-iife": ["error", "any", { functionPrototypeMethods: true }],

        "yield-star-spacing": ["error", "both"],
        "yoda": ["error", "never"],
        ...overrides
      },
      settings: {
        env: {
          browser: true,
          es6: true,
          node: true
        }
      }
    },
    {
      files: [`scripts/${GLOB_SRC}`, `cli.${GLOB_SRC_EXT}`],
      name: "curev:scripts-overrides",
      rules: {
        "no-console": "off"
      }
    }
  ];
}
