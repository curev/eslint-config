import { interopDefault } from "../utils";
import type { FlatConfigItem, OptionsOverrides, StylisticConfig } from "../types";
import { pluginCurev } from "../plugins";

export const StylisticConfigDefaults: StylisticConfig = {
  indent: 2,
  jsx: true,
  quotes: "double",
  semi: true,
  braceStyle: "1tbs",
  commaDangle: "never",
  arrowParens: true
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
        "curev/top-level-function": "error",
        "semi-spacing": ["error", { before: false, after: true }],
        "style/brace-style": ["error", "1tbs", { allowSingleLine: true }],
        "curly": ["error", "all"],
        "style/max-statements-per-line": ["off"],
        "curev/max-statements-per-line": ["error", { max: 1 }],
        ...overrides
      }
    }
  ];
}
