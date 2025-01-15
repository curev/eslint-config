import type { OptionsConfig, TypedFlatConfigItem } from "@antfu/eslint-config";
import type { Linter } from "eslint";
import type { Awaitable, FlatConfigComposer } from "eslint-flat-config-utils";
import { antfu } from "@antfu/eslint-config";

export type CurevOptions = OptionsConfig & Omit<TypedFlatConfigItem, "files">;

export function curev(options: CurevOptions = {}, ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any, any> | Linter.Config[]>[]) {
  return antfu(({
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
      overrides: {
        "style/comma-dangle": ["error", "only-multiline"],
        "style/brace-style": ["error", "1tbs"]
      },
    },
    ...options
  }), ...userConfigs);
}

export default curev;
