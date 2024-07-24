const express=require("express")
const app=express()
const {dbconnect}=require("./config/database")
const cors=require("cors")
const routes=require("./routes/route")
require("dotenv").config()
app.use(cors())
app.use(express.json())
app.use("",routes)
dbconnect()

app.get("/",(req,res)=>{
    res.send("<h1>This is Home Page....</h1>")
})
app.listen(process.env.PORT,(req,res)=>{
    console.log("Server Started...")
})
