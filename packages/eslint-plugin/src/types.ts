import { type TSESTree } from "@typescript-eslint/types";

export type ASTNode = TSESTree.Node & {
  alternate?: TSESTree.Node
};
export type ASTToken = TSESTree.Token;

