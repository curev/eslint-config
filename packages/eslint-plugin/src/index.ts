import genericSpacing from "./rules/generic-spacing";
import ifNewline from "./rules/if-newline";
import importDedupe from "./rules/import-dedupe";
import preferInlineTypeImport from "./rules/prefer-inline-type-import";
import maxStatementsPerLine from "./rules/max-statements-per-line";

export default {
  rules: {
    "if-newline": ifNewline,
    "import-dedupe": importDedupe,
    "prefer-inline-type-import": preferInlineTypeImport,
    "generic-spacing": genericSpacing,
    "max-statements-per-line": maxStatementsPerLine
  },
  configs: {
    recommends: {
      plugins: ["@curev"],
      rules: {
        "@curev/if-newline": "error",
        "@curev/import-dedupe": "error",
        "@curev/prefer-inline-type-import": "error",
        "@curev/generic-spacing": "error",
        "@curev/max-statements-per-line": "error"
      }
    }
  }
};

