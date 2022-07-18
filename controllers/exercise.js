import User from "../Models/userModel.js";

export const createUserExercise = async (req, res) => {
  const date = req.body.date
    ? new Date(req.body.date + "Z").toDateString()
    : new Date().toDateString();
  const { description, duration } = req.body;
  const _id = req.body[":_id"];

  const username = await User.findById(_id);
  if (username) {
    const addExercise = { description, duration, date };
    User.findByIdAndUpdate(
      { _id },
      { $push: { log: [addExercise] } },
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send({
            _id,
            username: username.username,
            description,
            duration,
            date,
          });
        }
      }
    );
  }
};
