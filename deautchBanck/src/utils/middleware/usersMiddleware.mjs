import db from "../database.mjs";
import { sendJsonResponse } from "../utilFunction.mjs";

export const checkIfUserHasPersonality = async (req, res, next) => {
    const {user_id} = req.query;

    try {
        const { personality_id: id } = await db('users')
            .where({ id: user_id })
            .first('personality_id');

        if (id) {
            const { name: personality } = await db('personality')
                .where({ id })
                .first('name');
            
            req.personality = personality;
        }

        next();
    } catch (error) {
        console.error(error);
        return sendJsonResponse(res, true, 500, "Failed to get user personality", null);
    }
}

export const setUserPersonality = async (req, res, next) => {
    const { user_id, personality_id } = req.body;
    try {
        
        await db('users')
            .where({ id: user_id })
            .update({ personality_id });

        const { name: personality } = await db('personality')
            .where({ id: personality_id })
            .first('name');

        req.personality = personality;
        next();
    } catch (error) {
        console.error(error);
        return sendJsonResponse(res, true, 500, "Failed to set user personality", null);
    }
}