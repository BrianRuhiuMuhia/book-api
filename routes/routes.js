const express=require("express")
const router=express.Router()
const {getAllBooks}=require("../controller/book.controller")

router.get("/books",getAllBooks)
router.all('*',(req,res)=>{
    res.send("hello")
})

module.exports=router