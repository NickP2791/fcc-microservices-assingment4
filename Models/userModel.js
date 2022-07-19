import mongoose from "mongoose";

const exerciseSchema = mongoose.Schema({
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: {
    type: String,
  },
});

const userSchema = mongoose.Schema({
  username: "string",
  count: Number,
  log: [exerciseSchema],
});

const User = mongoose.model("User", userSchema);

export default User;
