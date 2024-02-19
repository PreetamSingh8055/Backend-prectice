const express=require("express");
const app=express();
const port=8000;
const path =require("path");

app.listen(port,()=>{
    console.log(`port is listening on ${port}`);
})

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    // res.send("this is home page");
    // res.render("Home");
    res.render("Home.ejs");
});

app.get("/hello",(req,res)=>{
    res.send("hello");
});

app.get("/rolldice",(req,res)=>{
    // res.render("rolldice.ejs")
    let diceVal=Math.floor(Math.random()*6)+1;

    // res.render("rolldice.ejs",{ num : diceVal })     // {key : value}
    // res.render("rolldice.ejs",{ diceVal : diceVal })   // take same name of key as value is working
    res.render("rolldice.ejs",{diceVal});
})