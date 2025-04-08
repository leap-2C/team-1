
export const getUser = async (req, res) => {
  try {
    const { _id } = req.user;
    const User = await Users.findById(_id);
    res.json({ message: "get user data", user: User });
  } catch (err) {
    res.status(403).json({ message: "Error occurred" });
  }
};
