import { Request, Response } from "express";
import { asyncHandler } from "../../middleware/errorHandler";

export const login = asyncHandler(async (req: Request, res: Response) => {
  return res.status(404).json({
    message: "User not found",
    response: null,
    error: "User not found",
  });
});
