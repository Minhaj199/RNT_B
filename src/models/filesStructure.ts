import mongoose, { Types } from "mongoose";
import { NodeDataDoc } from "../types";

const schema = new mongoose.Schema<NodeDataDoc>({
  name: { type: String, required: true, unique: true },
  parentId: { type: Types.ObjectId, default: null },
  children: { type: [String] },
  level: { type: Number, default: 0 },
});
export const fileModel = mongoose.model<NodeDataDoc>("files", schema);
