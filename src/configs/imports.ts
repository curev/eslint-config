import type { FlatConfigItem, OptionsStylistic } from "../types";
import { pluginCurev, pluginImport } from "../plugins";
import { GLOB_SRC_EXT } from "../globs";

export async function imports(options: OptionsStylistic = {}): Promise<FlatConfigItem[]> {
  const {
    stylistic = true
  } = options;

  return [
    {
      name: "curev:imports",
      plugins: {
        curev: pluginCurev,
        import: pluginImport
      },
      rules: {
        "curev/import-dedupe": "error",
        "curev/no-import-dist": "error",
        "curev/no-import-node-modules-by-path": "error",

        "import/first": "error",
        "import/no-duplicates": "error",
        "import/no-mutable-exports": "error",
        "import/no-named-default": "error",
        "import/no-self-import": "error",
        "import/no-webpack-loader-syntax": "error",
        "import/order": "error",

        ...stylistic
          ? {
              "import/newline-after-import": ["error", { considerComments: true, count: 1 }]
            }
          : {}
      }
    },
    {
      files: ["**/bin/**/*", `**/bin.${GLOB_SRC_EXT}`],
      name: "curev:imports:bin",
      rules: {
        "curev/no-import-dist": "off",
        "curev/no-import-node-modules-by-path": "off"
      }
    }
  ];
}
