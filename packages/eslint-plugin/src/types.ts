import type { TSESTree } from "@typescript-eslint/utils";

export type ASTNode = TSESTree.Node & {
  alternate?: TSESTree.Node
};
export type ASTToken = TSESTree.Token;

