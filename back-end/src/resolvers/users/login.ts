import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Users } from "../../schemas/userSchema";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email });

    if (!user)
      return res
        .status(400)
        .json({ message: "Username or password did not match" });
    if (!bcrypt.compareSync(password, user.password))
      return res
        .status(400)
        .json({ message: "Username or password did not match" });
    var token = jwt.sign({ _id: user._id }, "uneheer nuuts");
    res.json({ token: token });
  } catch (err) {
    res.status(403).json({ message: "Error occured" });
  }
};
