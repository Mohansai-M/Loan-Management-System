import jwt from "jsonwebtoken";

export const Auth= (req, res, next) => {
  const token = req.header("authorization");
  if (token == null) {
    return res.status(401);
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(403);
      } else {
        req.user = user;
        next();
      }
    });
  }
};
