const express=require("express");
const app=express();
const port=1200;

app.listen(port,()=>{
    console.log("port connect sucessfully: " + port);
});
app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("this is my response");
})