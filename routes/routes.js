const express=require("express")
const router=express.Router()
const {getBooks,getBook, addBook, updateBook, deleteBook}=require("../controller/book.controller")
router.get("/books",getBooks)
router.get("/book",getBook)
router.post("/addbook",addBook)
router.patch("/updatebook",updateBook)
router.delete("/deletebook",deleteBook)
router.all('*',(req,res)=>{
    res.send("hello")
})

module.exports=router