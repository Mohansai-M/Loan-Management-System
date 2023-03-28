import Loans from "../LoanModel";

export const findOne = async (req, res) => {
  try {
    var ISBN = req.query.isbn;
    Books.findOne({ isbn: ISBN }, function (err, book) {
      if (err) {
        console.log(err);
      } else {
        res.json(book);
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
