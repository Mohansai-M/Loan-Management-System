import Loans from "../Models/LoanModel.js";

export const findAll = async (req, res) => {
  try {
    Loans.find().
    then(loans => res.json(loans))
    .catch(err => res.status(400).json({ error: 'Unable to add new Loan' }));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
