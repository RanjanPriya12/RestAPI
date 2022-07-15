const express=require('express');
const connectDB=require('./config/db');
const bookController=require('./controllers/books.controller');

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/books',bookController);


app.listen(5000,async()=>{
    try {
        await connectDB();
        
    } catch (error) {
        console.log(error)
    }
    console.log("listening on port 5000");
});