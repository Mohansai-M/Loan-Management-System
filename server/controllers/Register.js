import Users from "../Models/UserModel.js";
import bcrypt from "bcrypt";

export const Register = async (req, res) => {
  try {
    const { FirstName, LastName, Email, Password } = req.body;
    const user = await Users.findOne({ Email });

    if (user) 
     {
      return res.status(400).json({ msg: "The email already exists." });
     }
    else{
    if (Password.length < 6)
     { return res
        .status(400)
        .json({ msg: "Password should be atleast 6 characters long." });
     }
    else{
    const passwordHash = await bcrypt.hash(Password, 10);

    await Users.create({
      FirstName: FirstName,
      LastName: LastName,
      Email: Email,
      Password: passwordHash,
      Role: 0,
    });
    const accesstoken = createAccessToken({ id: newUser._id });
    const refreshtoken = createRefreshToken({ id: newUser._id });

    res.cookie("refreshtoken", refreshtoken, {
      httpOnly: true,
      path: "/user/refresh_token",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
    });

    res.json({ status: "ok"});
    }}
  } 
  catch (err) {
    res.status(500).json({ error: err });
  }
};

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "11m" });
};
const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};
