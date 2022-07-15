const mongoose=require("mongoose");
require('dotenv').config();

const connectDB=()=>{
    return mongoose.connect('mongodb+srv://priyaranjan:priyaranjan@cluster0.pil9f.mongodb.net/booksDB?retryWrites=true&w=majority',{useNewUrlParser:true});
  };
module.exports=connectDB;