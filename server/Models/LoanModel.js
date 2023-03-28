import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Loan = new Schema(
  {
    FirstName: {
      type: String,
    },
    LastName: {
      type: String,
    },
    LoanNumber: {
      type: String,
    },
    LoanAmount: {
      type: String,
    },
    Interest: {
      type: String,
    },
    NumberOfPayments: {
      type: String,
    },
    MonthlyPayment: {
      type: String,
    },
  },
  {
    collection: "Loans",
  }
);

const Loans = mongoose.model("loan", Loan);
export default Loans;