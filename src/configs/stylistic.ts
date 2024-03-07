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
        "semi-spacing": ["error", { after: true, before: false }],
        "style/brace-style": ["error", "1tbs", { allowSingleLine: true }],
        "style/max-statements-per-line": ["off"],
        ...overrides
      }
    }
  ];
}
