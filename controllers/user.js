import userModel from "../Models/userModel.js";

export const getUsers = async (req, res) => {
  try {
    const usersList = await userModel.find();
    res.status(200).json(usersList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  console.log(req.body);
  const userName = req.body;
  const newUser = new userModel(userName);

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//used for testing and development, deletes all the entries create by FCC test entries
export const cleanUp = (req, res) => {
  userModel.deleteMany({ username: { $regex: "^fcc" } }, function (err) {
    if (err) console.log(err);
  });

  res.send("Success in deletions");
};
