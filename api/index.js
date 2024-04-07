const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet"); //securing express apps using this 
const morgan = require("morgan"); // http request logger
const bookRoute = require("./routes/book");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const cors = require("cors");
require("dotenv").config();
const app = express();
mongoose.connect(process.env.DATABASE_CLUSTER_URL , {useNewUrlParser : true , useUnifiedTopology : true});

// middlewares

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());




app.use("/api/book",bookRoute);
app.use("/api/user", userRoute);
app.use("/api/auth",authRoute);

app.listen(8085, () => {
  console.log("Server is running on port 8085");
});
