import express from "express";

const app=express();

const port=3000;



app.listen(port,()=>{
    console.log(`port is listening :` + port );
});

app.get("/",(req,res)=>{
    res.send("<h1> this is a get response </h1>");
})

app.post("/",(req,res)=>{
    res.send("<h1>this is a post response </h1>")
})