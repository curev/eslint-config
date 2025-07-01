import type { ConfigNames, OptionsConfig, TypedFlatConfigItem } from "@antfu/eslint-config";
import type { Linter } from "eslint";
import type { Awaitable, FlatConfigComposer } from "eslint-flat-config-utils";
import { antfu } from "@antfu/eslint-config";
import defu from "defu";

export type CurevOptions = OptionsConfig & Omit<TypedFlatConfigItem, "files">;

export type CurevUserConfig = Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any, any> | Linter.Config[]>;

export type CurevConfigNames = ConfigNames;

export type CurevConfigs = FlatConfigComposer<TypedFlatConfigItem, CurevConfigNames>;

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
  vue: {
    overrides: {
      "vue/require-typed-ref": ["error"],
      "vue/no-side-effects-in-computed-properties": ["error"],
      "vue/no-ref-object-reactivity-loss": ["error"]
    }
  }
};

export function curev(options: CurevOptions = {}, ...userConfigs: CurevUserConfig[]): CurevConfigs {
  return antfu(defu(
    options,
    defaultConfig,
  ), ...userConfigs);
}

export default curev;
