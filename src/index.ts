import type { ConfigNames, OptionsConfig, Rules } from "@antfu/eslint-config";
import type { Linter } from "eslint";
import type { Awaitable, FlatConfigComposer } from "eslint-flat-config-utils";
import { antfu } from "@antfu/eslint-config";
import defu from "defu";

export type CurevOptions = OptionsConfig & Omit<TypedFlatConfigItem, "files">;

export type TypedFlatConfigItem = Omit<Linter.Config<Linter.RulesRecord & Rules>, "plugins"> & {
  /**
   * An object containing a name-value mapping of plugin names to plugin objects. When `files` is specified, these plugins are only available to the matching files.
   *
   * @see [Using plugins in your configuration](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#using-plugins-in-your-configuration)
   */
  plugins?: Record<string, any>;
};

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
  unocss: {
    overrides: {
      "unocss/order": ["error"]
    },
    strict: true
  }
};

export function curev(options: CurevOptions = {}, ...userConfigs: CurevUserConfig[]): CurevConfigs {
  return antfu(defu(
    options,
    defaultConfig,
  ), ...userConfigs);
}

export default curev;
