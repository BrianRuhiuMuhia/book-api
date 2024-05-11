const express=require("express")
const app=express()
const rateLimit =require('express-rate-limit')
const router=require("./routes/routes.js")
const dotenv=require("dotenv")
const cors=require("cors")
const errorHandling=require("./middleware/error.js")
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
    const limiter = rateLimit({
        windowMs: 15 * 1000,
        limit: 100, 
        standardHeaders: 'draft-7', 
        legacyHeaders: false
        
    })
    
app.use(limiter)
app.use(errorHandling)
app.use(cors(corsOptions));
app.use("/api/",router)
app.disable("x-powered-by");
app.use(express.json())
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
module.exports=app