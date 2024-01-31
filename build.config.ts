import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    "src/index.ts"
  ],
  declaration: true,
  rollup: {
    emitCJS: true
  },
  clean: true,
  externals: [
    "@typescript-eslint/parser",
    "@typescript-eslint/utils"
  ]
});
