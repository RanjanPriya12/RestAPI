const mongoose=require('mongoose');


// create author Schema

const authorSchema=new mongoose.Schema({
    'name':{type:String,required:true,minlength:5,maxlength:30},
    "age":{type:Number,required:true,min:20,max:80},
},{
    versionKey:false,
    timestamps:true
});

//create author Model

const Author=new mongoose.model('author',authorSchema);

module.exports=Author;