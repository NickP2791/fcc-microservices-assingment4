import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: "string",
});

const User = mongoose.model("User", userSchema);

export default User;
