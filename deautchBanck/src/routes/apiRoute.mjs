import { Router } from "express";
import users from "./../endpoints/users.mjs"
import personality from "./../endpoints/personality.mjs"
import chat from "./../endpoints/chat.mjs"

//import componenta from "./../endpoints/componenta";
const router = Router()

//router.use('/name/', componenta);
router.use('/users/', users);
router.use('/personality/', personality);
router.use('/chats/', chat)

export default router;