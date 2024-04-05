const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username : {
        type : String ,
        min : 4 ,
        required :true
    } ,
    email : {
        type : String ,
        min : 4 ,
        required :  true,
        unique :true
    } ,

    password : {
        type : String ,
        min : 4 ,
        required : true
    } ,
    books : {
        type : Array ,
        default : []
    }

}) ;

module.exports = mongoose.model("User",UserSchema);