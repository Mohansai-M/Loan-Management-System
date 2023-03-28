import express from "express";
import mongoose from "mongoose";
import ProductRouter from "./routes/loans.js";
import UserRouter from "./routes/UserAuth.js";
import cookieParser from "cookie-parser";
import cors from "cors";


import { fileURLToPath } from "url";

/*CONFIGURATIONS*/

//const __filename = fileURLToPath(import.meta.url);

const app = express();

mongoose.set("strictQuery", true);

mongoose.connect("mongodb://127.0.0.1:27017/Loan_Company");

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});


app.get('/',(req,res) =>
{
res.status(200).json({ message: "Hello from Server!",app:'Check'});
})

app.use(cookieParser());
app.use(express.json());

app.use("/", ProductRouter);
app.use("/api/", UserRouter);
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }))

const port = 4000;

app.listen(port, ()=>
{
    console.log("App running on port "+port);
});

