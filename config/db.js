const mongoose=require("mongoose");
require('dotenv').config();

const connectDB=()=>{
    return mongoose.connect(process.env.ATLAS_URL,{useNewUrlParser:true});
  };
module.exports=connectDB;