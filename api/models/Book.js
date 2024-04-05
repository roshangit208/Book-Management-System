const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title : {
        type : String ,
        min : 4 ,
        max : 20 ,
        required: true ,
        unique : true  
    } ,
    author : {
        type : String ,
        min : 4 ,
        max : 20 ,
        required : true 
    } , 
    year : {
        type : Number,
        required : true
    }});

    module.exports = mongoose.model("Book",BookSchema);