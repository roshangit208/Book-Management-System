const router = require("express").Router();
const User = require("../models/User");
const Book = require("../models/Book");

// get books by of user

router.get("/:id/books", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const books = await Promise.all(
            user.books.map(async (bookId) => {
                return await Book.findById(bookId);
            })
        );

        const bookList = [];
        books.map((book) => {
            bookList.push(book);
        });
      
        res.status(200).json(bookList);
    }
    catch (err) {
        res.status(500).json(err);
    }

});


module.exports = router;
