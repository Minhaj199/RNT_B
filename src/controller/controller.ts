import { NextFunction, Request, Response } from "express";
import { vaidatorAddForm } from "../utils/zod/zodValidation";
import { fileModel } from "../models/filesStructure";
import { NodeData } from "../types";
import { CreateChildNode } from "../service/fileSystemService";

export const controller = {
  createNode: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const isValid = vaidatorAddForm(req.body);
      if (isValid) {
        let result = null;
        if (!isValid?.parentId) {
          result = await fileModel.create(isValid);
        } else {
          result = await CreateChildNode(isValid);
        }
        if (result) {
          res.json({ success: true, newData: result });
        } else {
          throw new Error("internal server error");
        }
      } else {
        throw new Error("internal server error");
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  fetchNodes: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await fileModel.find();
      res.json({ data });
    } catch (error) {
      next(error);
    }
  },
};
