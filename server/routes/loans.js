import express, { request, response } from "express";
import { findAll } from "../controllers/findAll.js";
import { addLoan } from "../controllers/AddLoan.js";

const ProductRouter = express.Router();

ProductRouter.route("/Loans").get(findAll);
ProductRouter.route("/upload").post(addLoan)

export default ProductRouter;
