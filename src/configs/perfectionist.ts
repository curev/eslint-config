import type { FlatConfigItem } from "../types";

import { pluginPerfectionist } from "../plugins"; ;

/**
 * Optional perfectionist plugin for props and items sorting.
 *
 * @see https://github.com/azat-io/eslint-plugin-perfectionist
 */
export async function perfectionist(): Promise<FlatConfigItem[]> {
  return [
    {
      plugins: {
        perfectionist: pluginPerfectionist
      },
      rules: {
        "perfectionist/sort-named-exports": [
          "error",
          {
            order: "asc",
            type: "natural"
          }
        ],
        "perfectionist/sort-named-imports": [
          "error",
          {
            order: "asc",
            type: "natural"
          }
        ],
        "perfectionist/sort-object-types": [
          "error",
          {
            order: "asc",
            type: "natural"
          }
        ],
        "perfectionist/sort-objects": [
          "error",
          {
            order: "asc",
            type: "natural"
          }
        ],
        "perfectionist/sort-union-types": [
          "error",
          {
            order: "asc",
            type: "natural"
          }
        ],
        "sort-keys": "off"
      }
    }
  ];
}
