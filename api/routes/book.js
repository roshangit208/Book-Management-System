const router = require("express").Router();
const Book = require("../models/Book");
const User = require("../models/User");


//get all books
router.get("/", async (req,res)=>
{  try
    {
        const books = await Book.find({});
        res.status(200).json(books);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
   
});



// post a book
router.post("/", async (req,res) =>
{
    try{
    const newBook = new Book({
       title :  req.body.title ,
       author : req.body.author ,
       year : req.body.year
    });

   const book = await newBook.save(); 
   res.status(200).json(book);
} 
catch(err)
{
    res.status(500).json(err);
}

});

// update a book
router.put("/:id", async (req,res) => {
    try{
         await Book.findByIdAndUpdate(req.params.id , {
            $set:req.body
         });
        res.status(200).json("book have been updated");
    }
    catch(err)
    {
        res.status(500).json(err);
    }

});

// delete a book
router.delete("/:id", async (req,res) => {
    try
    {
      const book = await Book.findByIdAndDelete(req.params.id);
       res.status(200).json("book have been deleted");
    }
    catch(err)
    {
       res.status(500).json(err);
    }

});

module.exports = router;