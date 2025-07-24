const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const serverless = require('serverless-http');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Cegah koneksi ulang ke MongoDB
let isConnected = false;
const connectDB = async () => {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
  console.log("MongoDB connected");
};

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const Message = mongoose.models.Message || mongoose.model('Message', messageSchema);

// Vercel sudah handle /api/messages, jadi pakai '/'
app.post('/', async (req, res) => {
  try {
    await connectDB();
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(201).json({ message: "Message saved!" });
  } catch (err) {
    console.error("Error saving message:", err);
    res.status(500).json({ error: "Failed to save message." });
  }
});

module.exports = serverless(app);
