const express=require("express")
const app=express()
const router=require("./routes/routes.js")
const dotenv=require("dotenv")
const cors=require("cors")
const PORT=process.env.PORT || 3000
dotenv.config()
const corsOptions = {
    enabled: true,
        credentials: true, 
        origin: "*",
        headers: [
          "Content-Type",
          "Authorization",
          "X-Frame-Options",
         
        ]
    };
app.use(cors(corsOptions));
app.use("/api/",router)
app.use(express.json())
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
module.exports=app