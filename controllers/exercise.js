import User from "../Models/userModel.js";

export const createUserExercise = async (req, res) => {
  console.log(req.body);
  try {
    //extract information
    const date = req.body.date
      ? new Date(req.body.date + "Z").toDateString()
      : new Date().toDateString();
    const { description } = req.body;
    const id = req.params._id;
    const duration = Number(req.body.duration);
    console.log("this is the id of the user: ", id);

    //build packet of info to update
    const addExercise = { description, duration, date };
    console.log(id, addExercise);
    const addedInfo = {
      $push: { log: [addExercise] },
      $inc: { count: 1 },
    };
    const options = { returnDocument: "after" };

    //execute update
    const result = await User.findByIdAndUpdate(id, addedInfo, options);
    res.send({ _id: id, description, duration, date });
  } catch (error) {
    console.log(error.message);
  }
};
