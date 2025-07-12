import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection (update: no deprecated options)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Message model
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});
const Message = mongoose.model('Message', messageSchema);

// API endpoint
app.post('/api/messages', async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(201).json({ message: "Message saved!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save message." });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
