import express, { request, response } from "express";
import { Login } from "../controllers/Login.js";
import { RefreshAuth } from "../controllers/RefreshAuth.js";
import { Register } from "../controllers/Register.js";
import { UserInfo } from "../controllers/UserInfo.js";
import { Auth } from "../Middleware/Auth.js";
import { Logout } from "../controllers/Logout.js";
const UserRouter = express.Router();

UserRouter.route("/login").post(Login);
UserRouter.route("/logout").get(Logout);
UserRouter.route("/register").post(Register);
UserRouter.route("/info").get(Auth, UserInfo);
UserRouter.route("/refresh_token").post(RefreshAuth);

export default UserRouter;
