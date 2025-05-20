import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

const PORT = 3001;

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const geminiConfig = {
  apiKey: process.env.GEMINI_API_KEY,
};

app.get("/", async (req, res) => {
  try {
    // const response = await fetch();
    const data = {
      message: "Hi there from backend! Nodemon installed and working",
      apiKey: process.env.GEMINI_API_KEY,
    };
    res.json(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
