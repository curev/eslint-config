import genericSpacing from "./rules/generic-spacing"
import ifNewline from "./rules/if-newline"
import importDedupe from "./rules/import-dedupe"
import preferInlineTypeImport from "./rules/prefer-inline-type-import"

export default {
  rules: {
    "if-newline": ifNewline,
    "import-dedupe": importDedupe,
    "prefer-inline-type-import": preferInlineTypeImport,
    "generic-spacing": genericSpacing,
  },
}

const a = { b: "1" }

switch (a.b) {
  case "1":
    break
}

if (a.b) {
  a.b = "2"
}

