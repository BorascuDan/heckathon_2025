import jwt from "jsonwebtoken";
import db from "./database.mjs";

export function sendJsonResponse(res, success, status, message, data) {
  res.status(status).json({ success: success, message: message, data: data });
}

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return sendJsonResponse(res, false, 401, "Access denied", null);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {

    if (err) {
      return sendJsonResponse(res, false, 403, "Invalid or expired token", null);
    }

    req.user = user;
    next();
  });
};

export const getAiResponse = async (message, key = null) => {
  try {
    const response = await fetch('http://localhost:8000/talk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          "message": message,
          ...(key ? { "id": key } : {})
         })
      });
      const data = await response.json();
      const chat = [
        { type: 'user', content: message },
        { type: 'bot', content: data.message }
      ]
      return [data.id, chat]
  } catch (error) {
    console.error(error);
    return
  }
}

export const warningForUsers = async () => {

  try {
    const warnini = await db('warnings');
    const warninigsNames = warnini.map(boala => boala.name)
    const warningIdToName = warnini.reduce((result, warninig) => {
      const id = warninig.name;
      result[id] = warninig.id
      return result
    }, {})

    const warnings = new Set(warninigsNames);

    const chats = await db('chat');
    const messagesPerUser = chats.reduce((chats, mesage) => {
      const id = mesage.user_id;
      chats[id] = mesage.messages;
      return chats
    }, {})

    for (let [key, value] of Object.entries(messagesPerUser)) {
      const messages = JSON.parse(value).slice(-10);
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages })
      });
      const data = await response.json();

      if (data.diseases === null) {
        continue;
      } 

      for (let disease of data.diseases) {
        if (warnings.has(disease)) {
          const user_warnings = {
            user_id: key,
            warning_id: warningIdToName[disease],
            trigger_messages: JSON.stringify(messages)
          }
          await db('user_warnings').insert(user_warnings)
        }
      }
    }
    return
  } catch (error) {
    console.error(error);
    return
  }
}