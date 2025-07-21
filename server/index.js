import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import serverless from 'serverless-http';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Koneksi MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Schema dan Model
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});
const Message = mongoose.model('Message', messageSchema);

// Route handler
app.post('/api/messages', async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(201).json({ message: "Message saved!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save message." });
  }
});

// Export sebagai handler serverless
export const handler = serverless(app);
