import mongoose from "mongoose";

const exerciseSchema = mongoose.Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: {
    type: String,
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

export default Exercise;
