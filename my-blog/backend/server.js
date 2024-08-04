
import mongoose from "mongoose";
import express from "express";
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import { protect } from "./middleware/authMiddleware.js";
import { connectionString } from "./config/data.js";


const app = express();

app.use(express.json());

// Database connection
mongoose.connect(connectionString)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Routes
app.use("/routes/authRoutes", authRoutes);
app.use("/routes/postsRoutes", protect, postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
