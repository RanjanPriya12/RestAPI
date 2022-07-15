const express=require('express');
const Book=require('../models/books.model');

const router=express.Router();


router.post("/",async(req,res)=>{
    try {
        const books=await Book.create(req.body);
        return res.status(200).send(books);
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
});

router.get("/",async(req,res)=>{
    try {
        const books=await Book.find().lean().exec();
        return res.status(200).send({books:books})
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
});



router.delete("/:id",async(req,res)=>{
    try {
        const book=await Book.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(book)
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
});


router.patch("/:id",async(req,res)=>{
    try {
        const book=await Book.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(200).send(book)
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
});


module.exports=router;