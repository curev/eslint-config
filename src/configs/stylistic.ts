import type { FlatConfigItem, OptionsOverrides, StylisticConfig } from "../types";

import { pluginCurev } from "../plugins";
import { interopDefault } from "../utils";

export const StylisticConfigDefaults: StylisticConfig = {
  arrowParens: true,
  braceStyle: "1tbs",
  commaDangle: "never",
  indent: 2,
  jsx: true,
  quotes: "double",
  semi: true
};

export async function stylistic(
  options: StylisticConfig & OptionsOverrides = {}
): Promise<FlatConfigItem[]> {
  const mergeOptions = {
    ...StylisticConfigDefaults,
    ...options
  };

  const { overrides = {} } = mergeOptions;

  const pluginStylistic = await interopDefault(import("@stylistic/eslint-plugin"));

  const config = pluginStylistic.configs.customize({
    flat: true,
    pluginName: "style",
    ...mergeOptions
  });

  return [
    {
      name: "curev:stylistic",
      plugins: {
        curev: pluginCurev,
        style: pluginStylistic
      },
      rules: {
        ...config.rules,
        "curev/consistent-list-newline": "error",
        "curev/if-newline": "off",
        "curev/max-statements-per-line": ["error", { max: 1 }],
        "curev/top-level-function": "error",
        "curly": ["error", "all"],
        "style/brace-style": ["error", "1tbs", { allowSingleLine: true }],
        "style/lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
        "style/max-statements-per-line": ["off"],
        "style/multiline-ternary": ["error", "always-multiline"],
        "style/no-extra-parens": ["error", "functions"],
        "style/no-mixed-operators": ["error", {
          allowSamePrecedence: true,
          groups: [
            ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
            ["&&", "||"],
            ["in", "instanceof"]
          ]
        }],
        "style/no-multiple-empty-lines": [
          "error",
          {
            max: 3,
            maxBOF: 0,
            maxEOF: 1
          }
        ],
        "style/object-curly-newline": ["error", { consistent: true, multiline: true }],
        "style/object-curly-spacing": ["error", "always"],
        "style/object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }],
        "style/padded-blocks": ["error", { blocks: "never", classes: "never", switches: "never" }],
        "style/rest-spread-spacing": ["error", "never"],
        "style/semi-spacing": ["error", { after: true, before: false }],
        "style/template-curly-spacing": ["error", "never"],
        "style/template-tag-spacing": ["error", "never"],
        "style/wrap-iife": ["error", "any", { functionPrototypeMethods: true }],
        "style/yield-star-spacing": ["error", "both"],
        ...overrides
      }
    }
  ];
}
