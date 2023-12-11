const express =require("express");
const app=express();
const router=require("./router")
const port= 3305;

app.use("/api",router)

app.listen(port,()=>{
    console.log("服务器运行在：http://localhost:"+port);        
})