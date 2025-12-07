import { Router } from "express";
import db from "../utils/database.mjs";
import { getAiResponse, sendJsonResponse } from "../utils/utilFunction.mjs";

const router = Router()
// authenticateToken,
router.post("/", async (req, res) => {
    const { user_id, message } = req.body
    try {
        const chat = await db('chat')
            .where({user_id})
            .first();
        const [ key, botMessage ] = await getAiResponse(message, chat?.key ?? null)
        const response = botMessage[1].content
            
        const formatedMessage = chat ? 
                    JSON.parse(chat.messages) :
                    [];
        
        const newChat = [...formatedMessage, ...botMessage]

        if (chat) {
            await db('chat')
                .where({user_id})
                .update({
                    messages: JSON.stringify(newChat),
                    key
                })
        } else {
            await db('chat')
                .insert({
                    user_id,
                    messages: JSON.stringify(newChat),
                    key
                })
        }

        return sendJsonResponse(res, true, 200, "succes", response);
    } catch (error) {
        console.error(error);
        return sendJsonResponse(res, true, 500, "Failed to send message", null);
    }
})

router.get("/",  async (req, res) => {
    const {user_id} = req.query;

    try {
        const chat = await db('chat')
            .where({user_id})
            .first();

        const formatedMessage = chat ? JSON.parse(chat.messages) : [];
        return sendJsonResponse(res, true, 200, "usuer chat fetched", formatedMessage)
    } catch (error) {
        console.error(error);
        return sendJsonResponse(res, true, 500, "Failed to fetch chat", null);
    }
});
router.get("/warnings", async (req, res) => {
    const {user_id} = req.query;

    try {
        const warning = await db('user_warnings')
            .where('user_warnings.user_id', user_id)
            .leftJoin('warnings', 'user_warnings.warning_id', 'warnings.id')
            .select('warnings.id', 'warnings.name', 'warnings.message');
            

        return sendJsonResponse(res, true, 200, "usuer chat fetched", warning)
    } catch (error) {
        console.error(error);
        return sendJsonResponse(res, true, 500, "Failed to fetch chat", null);
    }
})
router.get("/warningsTriggers", async (req, res) => {
    const {user_id, warning_id} = req.query;

    try {
        const { trigger_messages } = await db('user_warnings')
            .where({user_id, warning_id})
            .first('trigger_messages');
            
        const formatedMessage = JSON.parse(trigger_messages)
        return sendJsonResponse(res, true, 200, "usuer chat fetched", formatedMessage)
    } catch (error) {
        console.error(error);
        return sendJsonResponse(res, true, 500, "Failed to fetch chat", null);
    }
})

router.delete("/",  async (req, res) => {
    const {user_id} = req.query;

    try {
        const chat = await db('chat')
            .where({user_id})

        if (!chat.length) {
            return sendJsonResponse(res, true, 404, "usuer chat alredy delleted", null)
        }

        await db('chat')
            .where({user_id})
            .delete();
        
        return sendJsonResponse(res, true, 200, "usuer chat deleted", null)
    } catch (error) {
        console.error(error);
        return sendJsonResponse(res, true, 500, "Failed to delete chat", null);
    }
});


export default router;