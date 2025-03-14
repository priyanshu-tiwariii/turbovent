
import { Request, Response } from 'express';
import apiError from '../helpers/apiError';
import apiResponse from '../helpers/apiResponse';
import asyncHandler from '../helpers/asyncHandler';

export const testingControllers  = asyncHandler(async (req: Request, res: Response) => {
    try {
        const data = {
            message: "Welcome to Turbovent",
        };
        return res.status(200).json(
            new apiResponse(data, 200, "Success", true)
        );
    } catch (error) {
        throw new apiError(500, "Server Error", error);
    }
}
);