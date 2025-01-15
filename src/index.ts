import type { OptionsConfig, TypedFlatConfigItem } from "@antfu/eslint-config";
import type { Linter } from "eslint";
import type { Awaitable, FlatConfigComposer } from "eslint-flat-config-utils";
import { antfu } from "@antfu/eslint-config";
import defu from "defu";

export type CurevOptions = OptionsConfig & Omit<TypedFlatConfigItem, "files">;

export const defaultConfig: CurevOptions = {
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
    overrides: {
      "style/comma-dangle": ["error", "only-multiline"],
      "style/brace-style": ["error", "1tbs"],
      "style/arrow-parens": ["error", "always"],
      "style/multiline-ternary": ["error", "always-multiline"],
      "curly": ["error", "multi-line", "consistent"],
    }
  },
  unocss: {
    overrides: {
      "unocss/order": ["error"]
    },
    strict: true
  }
};

export function curev(options: CurevOptions = {}, ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any, any> | Linter.Config[]>[]) {
  return antfu(defu(
    options,
    defaultConfig,
  ), ...userConfigs);
}

export default curev;
