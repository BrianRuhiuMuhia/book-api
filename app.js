const express=require("express")
const app=express()
const router=require("./routes/routes.js")
const dotenv=require("dotenv")
dotenv.config()
const PORT=process.env.PORT || 3000
app.use("/api/",router)
app.get("/",(req,res)=>{
    return res.send("<h1>HomePage</h1>")
})
app.use(express.json())
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
module.exports=app