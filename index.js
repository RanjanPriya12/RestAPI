const express=require('express');
const connectDB=require('./config/db');
require('dotenv').config();
const bookController=require('./controllers/books.controller');
const PORT=process.env.port || 5000;

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/books',bookController);


app.listen(PORT,async()=>{
    try {
        await connectDB();
        
    } catch (error) {
        console.log(error)
    }
    console.log(`listening on port ${PORT}`);
});