import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  category: String,
  pricePerKg: Number,
  imageUrl: String,
}, { timestamps: true });

export default mongoose.models.Item || mongoose.model("Item", ItemSchema);
