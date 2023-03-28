import Loans from "../Models/LoanModel.js";

export const addLoan = async (req, res) => {
    console.log(req.body)
  try {
    let loan = new Loans(req.body)
    loan.save(req.body)
    .then(loan => res.json({ msg: 'Loan added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add new Loan' }));
}
     catch (err) {
    res.status(500).json({ error: err.message });
  }
};
