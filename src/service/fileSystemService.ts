import { InsertOneModel, Types } from "mongoose";
import { fileModel } from "../models/filesStructure";
import { NewNodeSchemaType } from "../utils/zod/zodSchemas";

export async function CreateChildNode(data: NewNodeSchemaType) {
  const session = await fileModel.startSession();
  try {
    session.startTransaction();
    const insertResult = await fileModel.insertOne(data, { session });
    if (!("_id" in insertResult)) throw new Error("errro on node insertion");
    await fileModel.updateOne(
      { _id: new Types.ObjectId(data.parentId as string) },
      { $push: { children: insertResult._id } },
      { session }
    );
    await session.commitTransaction();
    return { ...data, _id: insertResult._id };
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
}
