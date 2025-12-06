import { Router } from "express";
import db from "../utils/database.mjs";
import { sendJsonResponse } from "../utils/utilFunction.mjs";

const router = Router()
// authenticateToken,
router.get("/",  async (req, res) => {
    try {
        const personalities = await db('personality').select('id', 'name');

        if (personalities.length > 0) {
            return sendJsonResponse(res, true, 200, "Personalities fetched successfully", personalities);
        } else {
            return sendJsonResponse(res, false, 404, "No personalities found", null);
        }
    } catch (error) {
        console.error(error);
        return sendJsonResponse(res, true, 500, "Failed to set user personality", null);
    }
});

export default router;