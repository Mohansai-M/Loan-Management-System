import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema(
  {
    FirstName: {
      type: String,
      required: true,
      trim: true,
    },
    LastName: {
      type: String,
      required: true,
      trim: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
    },
    Role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
  {
    collection: "Users",
  }
);

const Users = mongoose.model("user", User);
export default Users;