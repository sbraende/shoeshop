import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

app.post("/", async (req, res) => {
  try {
    const data = {
      message: "Hi there from backend! Nodemon installed and working",
      FEMessage: req.body,
    };
    res.json(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
