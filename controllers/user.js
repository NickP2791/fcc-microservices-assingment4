import userModel from "../Models/userModel.js";

export const getUserLogs = async (req, res) => {
  const { id } = req.params;
  const { from, to, limit } = req.query;
  console.log(id);

  try {
    const userLog = await userModel.findById(id);
    const { _id, username, count, log } = userLog;

    if (from === undefined && to === undefined) {
      res.status(200).json({ _id, username, count, log });
    } else {
      let filtered;
      if (!!from && !!to === false) {
        filtered = log.filter((n) => new Date(n.date + "Z") >= new Date(from));
      } else if (!!from === false && !!to) {
        filtered = log.filter((n) => new Date(n.date + "Z") <= new Date(to));
      } else if (!!from && !!to) {
        filtered = log.filter(
          (n) =>
            new Date(from) >= new Date(n.date + "Z") &&
            new Date(n.date + "Z") <= new Date(to)
        );
      }
      const logLength =
        !!limit && limit < filtered.length ? limit : filtered.length;

      filtered = filtered.slice(0, logLength);
      res.status(200).json({ _id, username, count: logLength, log: filtered });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUsers = async (req, res) => {
  console.log(res.body);
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
    res.status(201).send({ _id: newUser.id, username: newUser.username });
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
