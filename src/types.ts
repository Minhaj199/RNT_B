import { Document } from "mongoose";

export interface NodeData {
  name: string;
  parentId: string | null;
  children: string[];
  level: number;
}
export interface NodeDataDoc extends NodeData, Document {}

/////////////mongo Error////
export interface MongoDuplicateKeyError extends Error {
  code: number;
  keyValue?: Record<string, any>;
}
