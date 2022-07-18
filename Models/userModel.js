import mongoose from "mongoose";
// import Exercise from "./exerciseModel";

const exerciseSchema = mongoose.Schema({
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: {
    type: String,
  },
});

const userSchema = mongoose.Schema({
  username: "string",
  log: [exerciseSchema],
});

const User = mongoose.model("User", userSchema);

export default User;
