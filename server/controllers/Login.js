import Users from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv"
import jwt from "jsonwebtoken";
dotenv.config();

export const Login = async (req, res) => {
   try{
   const { Email, Password } = req.body;
   const user=  await Users.findOne({Email});
   if(user)
    {
      const isMatch = await bcrypt.compare(req.body.Password, user.Password);
        if (isMatch)
         {
            const accesstoken = createAccessToken({ id: user._id });
            const refreshtoken = createRefreshToken({ id: user._id });

            res.status(202)
            .cookie("refreshtoken", refreshtoken, {
              secure: true,
              httpOnly: true,
              maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
              sameSite: 'none'
            });
            res.json({ refreshtoken });
         }
      else  {
          return res.status(400).json({ msg: "Incorrect password." });
        }
      }
         else {
           return res.status(400).json({ msg: "User does not exist." });
         }
    }
    catch (err) {
      return res.status(500).json({ msg: err.message });
    }
};
const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "11m" });
};
const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};
