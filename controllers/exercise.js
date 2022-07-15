import exerciseModel from "../Models/exerciseModel.js";

// export const getUsers = async (req, res) => {
//   try {
//     const usersList = await userModel.find();
//     res.status(200).json(usersList);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

export const createUserExercise = (req, res) => {
  console.log("Nicolas");
  console.log(req.params.id);
  // const userName = req.body;
  // const newUser = new userModel(userName);

  // try {
  //   await newUser.save();
  //   res.status(201).json(newUser);
  // } catch (error) {
  //   res.status(409).json({ message: error.message });
  // }
};
