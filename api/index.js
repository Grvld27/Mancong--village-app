const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const serverless = require('serverless-http');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

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

// ✅ Endpoint diubah ke /api
app.post('/api', async (req, res) => {
  try {
    await connectDB();
    console.log("Received body:", req.body);
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(201).json({ message: "Message saved!" });
  } catch (err) {
    console.error("Error saving message:", err);
    res.status(500).json({ error: "Failed to save message." });
  }
});

// ✅ Mode serverless (untuk Vercel)
module.exports = serverless(app);

// ✅ Mode normal (untuk lokal)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
