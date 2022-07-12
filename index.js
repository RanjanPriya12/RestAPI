const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config();

const app=express();

mongoose.connect(process.env.ATLAS_UrL,
{useNewUrlParser:true}
).then(()=>{
    console.log('connection stablished')
}).catch(err=>{
    console.log('something went wrong ', err);
});

app.listen(5000,()=>{
    console.log('Listening on port number 5000');
})