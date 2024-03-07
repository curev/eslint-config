import type {
  EslintCommentsRules,
  EslintRules,
  FlatESLintConfigItem,
  ImportRules,
  JsoncRules,
  MergeIntersection,
  NRules,
  Prefix,
  ReactHooksRules,
  ReactRules,
  RenamePrefix,
  RuleConfig,
  VitestRules,
  VueRules,
  YmlRules
} from "@antfu/eslint-define-config";
import type { Rules as CurevRules } from "@curev/eslint-plugin";
import type { RuleOptions as JSDocRules } from "@eslint-types/jsdoc/types";
import type { RuleOptions as TypeScriptRules } from "@eslint-types/typescript-eslint/types";
import type { RuleOptions as UnicornRules } from "@eslint-types/unicorn/types";
import type { StylisticCustomizeOptions, UnprefixedRuleOptions as StylisticRules } from "@stylistic/eslint-plugin";
import type { ParserOptions } from "@typescript-eslint/parser";
import type { Linter } from "eslint";
import type { FlatGitignoreOptions } from "eslint-config-flat-gitignore";
import type { Options as VueBlocksOptions } from "eslint-processor-vue-blocks";

import type { VendoredPrettierOptions } from "./vender/prettier-types";

export type WrapRuleConfig<T extends { [key: string]: any }> = {
  [K in keyof T]: T[K] extends RuleConfig ? T[K] : RuleConfig<T[K]>
};

export type Awaitable<T> = Promise<T> | T;

export type Rules = WrapRuleConfig<
  MergeIntersection<
    RenamePrefix<TypeScriptRules, "@typescript-eslint/", "ts/"> &
    RenamePrefix<VitestRules, "vitest/", "test/"> &
    RenamePrefix<YmlRules, "yml/", "yaml/"> &
    RenamePrefix<NRules, "n/", "node/"> &
    Prefix<StylisticRules, "style/"> &
    Prefix<CurevRules, "curev/"> &
    ReactHooksRules &
    ReactRules &
    JSDocRules &
    ImportRules &
    EslintRules &
    JsoncRules &
    VueRules &
    UnicornRules &
    EslintCommentsRules &
    // TODO: TOML rules
    {
      "test/no-only-tests": RuleConfig<[]>;
    }
  >
>;

export type FlatConfigItem = Omit<FlatESLintConfigItem<Rules, false>, "plugins"> & {
  /**
   * Custom name of each config item
   */
  name?: string;

  // Relax plugins type limitation, as most of the plugins did not have correct type info yet.
  /**
   * An object containing a name-value mapping of plugin names to plugin objects. When `files` is specified, these plugins are only available to the matching files.
   *
   * @see [Using plugins in your configuration](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#using-plugins-in-your-configuration)
   */
  plugins?: Record<string, any>;
};

export type UserConfigItem = FlatConfigItem | Linter.FlatConfig;

export interface OptionsFiles {
  /**
   * Override the `files` option to provide custom globs.
   */
  files?: string[];
}

export interface OptionsVue extends OptionsOverrides {
  /**
   * Create virtual files for Vue SFC blocks to enable linting.
   *
   * @see https://github.com/antfu/eslint-processor-vue-blocks
   * @default true
   */
  sfcBlocks?: VueBlocksOptions | boolean;

  /**
   * Vue version. Apply different rules set from `eslint-plugin-vue`.
   *
   * @default 3
   */
  vueVersion?: 2 | 3;
}

export type OptionsTypescript =
  (OptionsTypeScriptParserOptions & OptionsOverrides)
  | (OptionsTypeScriptWithTypes & OptionsOverrides);

export interface OptionsFormatters {
  /**
   * Enable formatting support for CSS, Less, Sass, and SCSS.
   *
   * Currently only support Prettier.
   */
  css?: "prettier" | boolean;

  /**
   * Custom options for dprint.
   *
   * By default it's controlled by our own config.
   */
  dprintOptions?: boolean;

  /**
   * Enable formatting support for GraphQL.
   */
  graphql?: "prettier" | boolean;

  /**
   * Enable formatting support for HTML.
   *
   * Currently only support Prettier.
   */
  html?: "prettier" | boolean;

  /**
   * Enable formatting support for Markdown.
   *
   * Support both Prettier and dprint.
   *
   * When set to `true`, it will use Prettier.
   */
  markdown?: "dprint" | "prettier" | boolean;

  /**
   * Custom options for Prettier.
   *
   * By default it's controlled by our own config.
   */
  prettierOptions?: VendoredPrettierOptions;
}

export interface OptionsComponentExts {
  /**
   * Additional extensions for components.
   *
   * @example ['vue']
   * @default []
   */
  componentExts?: string[];
}

export interface OptionsTypeScriptParserOptions {
  /**
   * Glob patterns for files that should be type aware.
   * @default ['**\/*.{ts,tsx}']
   */
  filesTypeAware?: string[];

  /**
   * Additional parser options for TypeScript.
   */
  parserOptions?: Partial<ParserOptions>;
}

export interface OptionsTypeScriptWithTypes {
  /**
   * When this options is provided, type aware rules will be enabled.
   * @see https://typescript-eslint.io/linting/typed-linting/
   */
  tsconfigPath?: string | string[];
}

export interface OptionsHasTypeScript {
  typescript?: boolean;
}

export interface OptionsStylistic {
  stylistic?: StylisticConfig | boolean;
}

export interface StylisticConfig extends StylisticCustomizeOptions {
}

export interface OptionsOverrides {
  overrides?: FlatConfigItem["rules"];
}

export interface OptionsIsInEditor {
  isInEditor?: boolean;
}

export interface OptionsUnoCSS extends OptionsOverrides {
  /**
   * Enable attributify support.
   * @default true
   */
  attributify?: boolean;
  /**
   * Enable strict mode by throwing errors about blocklisted classes.
   * @default false
   */
  strict?: boolean;
}

export interface OptionsConfig extends OptionsComponentExts {
  /**
   * Use external formatters to format files.
   *
   * Requires installing:
   * - `eslint-plugin-format`
   *
   * When set to `true`, it will enable all formatters.
   *
   * @default false
   */
  formatters?: OptionsFormatters | boolean;

  /**
   * Enable gitignore support.
   *
   * Passing an object to configure the options.
   *
   * @see https://github.com/antfu/eslint-config-flat-gitignore
   * @default true
   */
  gitignore?: FlatGitignoreOptions | boolean;

  /**
   * Control to disable some rules in editors.
   * @default auto-detect based on the process.env
   */
  isInEditor?: boolean;

  /**
   * Core rules. Can't be disabled.
   */
  javascript?: OptionsOverrides;

  /**
   * Enable JSONC support.
   *
   * @default true
   */
  jsonc?: OptionsOverrides | boolean;

  /**
   * Enable JSX related rules.
   *
   * Currently only stylistic rules are included.
   *
   * @default true
   */
  jsx?: boolean;

  /**
   * Enable linting for **code snippets** in Markdown.
   *
   * For formatting Markdown content, enable also `formatters.markdown`.
   *
   * @default true
   */
  markdown?: OptionsOverrides | boolean;

  /**
   * Provide overrides for rules for each integration.
   *
   * @deprecated use `overrides` option in each integration key instead
   */
  overrides?: {
    javascript?: FlatConfigItem["rules"];
    jsonc?: FlatConfigItem["rules"];
    markdown?: FlatConfigItem["rules"];
    react?: FlatConfigItem["rules"];
    stylistic?: FlatConfigItem["rules"];
    svelte?: FlatConfigItem["rules"];
    test?: FlatConfigItem["rules"];
    toml?: FlatConfigItem["rules"];
    typescript?: FlatConfigItem["rules"];
    vue?: FlatConfigItem["rules"];
    yaml?: FlatConfigItem["rules"];
  };

  /**
   * Enable react rules.
   *
   * Requires installing:
   * - `eslint-plugin-react`
   * - `eslint-plugin-react-hooks`
   * - `eslint-plugin-react-refresh`
   *
   * @default false
   */
  react?: OptionsOverrides | boolean;

  /**
   * Enable stylistic rules.
   *
   * @default true
   */
  stylistic?: (StylisticConfig & OptionsOverrides) | boolean;

  /**
   * Enable svelte rules.
   *
   * Requires installing:
   * - `eslint-plugin-svelte`
   *
   * @default false
   */
  svelte?: boolean;

  /**
   * Enable test support.
   *
   * @default true
   */
  test?: OptionsOverrides | boolean;

  /**
   * Enable TOML support.
   *
   * @default true
   */
  toml?: OptionsOverrides | boolean;

  /**
   * Enable TypeScript support.
   *
   * Passing an object to enable TypeScript Language Server support.
   *
   * @default auto-detect based on the dependencies
   */
  typescript?: OptionsTypescript | boolean;

  /**
   * Enable unocss rules.
   *
   * Requires installing:
   * - `@unocss/eslint-plugin`
   *
   * @default false
   */
  unocss?: OptionsUnoCSS | boolean;

  /**
   * Enable Vue support.
   *
   * @default auto-detect based on the dependencies
   */
  vue?: OptionsVue | boolean;

  /**
   * Enable YAML support.
   *
   * @default true
   */
  yaml?: OptionsOverrides | boolean;
}
