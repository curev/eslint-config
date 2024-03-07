import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: [
    "src/index.ts"
  ],
  externals: [
    "@typescript-eslint/parser",
    "@typescript-eslint/utils"
  ],
  rollup: {
    emitCJS: true
  }
});
