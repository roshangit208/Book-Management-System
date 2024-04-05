const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// register a user 
router.post("/register", async (req, res) => {
    try {

        // generating hashed password
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(req.body.password, salt);
      
        const newUser = new User({
            username :  req.body.username ,
            email :  req.body.email,
            password : hashpassword 
        });

        const user = await newUser.save();
        res.status(200).json("user registered");

    }
    catch(err)
    {
        res.status(500).json(err);
    }
   
   
});

// login a user

router.get("/login", async (req, res) => {

    try{
          const user = await User.findOne({email : req.body.email});
          !user && res.status(500).json("user not found");

          const validPassword = await bcrypt.compare(req.body.password , user.password);
          !validPassword && res.status(500).json("wrong password");
          res.status(200).json(user);
    }
  catch(err)
  {
    res.status(500).json(err);
  }
     
});

module.exports = router;