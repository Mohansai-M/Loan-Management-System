import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

export const RefreshAuth = async (req, res) => {
  try {
    const rftoken = req.cookies.refreshtoken;
    if (rftoken == null) {
      return res.status(400).json({ msg: "Please Login or Register1" });
    } else {
      jwt.verify(rftoken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) {
          return res.status(400).json({ msg: "Please Login or Register" });
        } else {
          const accesstoken = createAccessToken({ id: user.id });

          res.json({ accesstoken });
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "11m" });
};
const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};
