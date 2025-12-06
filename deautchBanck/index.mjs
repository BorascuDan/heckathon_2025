import express from "express"
import dotenv from 'dotenv'
import apiRouter from './src/routes/apiRoute.mjs'
import db from "./src/utils/database.mjs";
import cron from 'node-cron';
import { warningForUsers } from './src/utils/utilFunction.mjs'

const app = express();


dotenv.config()
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

cron.schedule('* * * * * *', async () => {
  console.log('Cron running...');
  await warningForUsers();
});

app.use('/api/', apiRouter)

app.get('/health', async (req, res) => {
  let dbConnection;
  try {
    await db.raw('SELECT 1+1 AS result');
    dbConnection = "OK";
  } catch (error) {
    console.log("ERROR: ", error)
    dbConnection = false;
  }

  return res.status(200).json({
    status: 'UP',
    uptime: process.uptime(),
    timestamp: Date.now(),
    db_connection: dbConnection
  });
})

export default app;