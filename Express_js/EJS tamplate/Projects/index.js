const express=require("express");
const app=express();
const port=3000;

app.listen(port,()=>{
    console.log(`port is listening on ${port}`);
});
 // rolldice page code
 app.get("/rolldice",(req,res)=>{
    let value=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{value})
 })



// instagram page code 
app.get("/",(req,res)=>{
    res.send("this is a root page ");
});

// this is not best prectice to send data from array

app.get("/random/:username",(req, res)=>{
    let {username}=req.params;
    const followers=["Anil","Sawan","baba","Sehjot","Arun"];
    res.render("Random.ejs", {username, followers})
    // console.log(username);
});


// this is best prectice to send data from data.json or from database

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instaData=require("./data.json");
    const data=instaData[username];

    if(data)
    {
        // console.log(data);
        res.render("instagram.ejs",{data});
    }
    else{
        res.send('<h1> No such account</h1>');
    }


})