import User from "../Models/userModel.js";

export const createUserExercise = async (req, res) => {
  console.log(req.body);
  const date = req.body.date
    ? new Date(req.body.date + "Z").toDateString()
    : new Date().toDateString();
  const { description } = req.body;
  const _id = req.body[":_id"];
  const duration = Number(req.body.duration);

  const addExercise = { description, duration, date };

  const updateExercise = async (id) => {
    try {
      const addingExercise = await User.findByIdAndUpdate(
        id,
        {
          $push: { log: [addExercise] },
          $inc: { count: 1 },
        },
        { returnDocument: "after" }
      );
      const { username } = addingExercise;
      const { description, duration, date } =
        addingExercise.log[addingExercise.log.length - 1];

      return { _id: id, username, description, duration, date };
    } catch (error) {
      res.send(error.massage);
    }
  };

  updateExercise(_id).then((data) => res.json(data));
};
