const mongoose=require('mongoose');
const Author=require('./author.model');

// create book Schema

const bookSchema=new mongoose.Schema({
    'title':{type:String,required:true,minlength:5,maxlength:30},
    "price":{type:Number,required:true},
    "author":Author.schema,
    "genre":{type:String,required:true,minlength:5,maxlength:20}
},{
    versionKey:false,
    timestamps:true
});

//create book Model

const Book=new mongoose.model('book',bookSchema);

module.exports=Book;