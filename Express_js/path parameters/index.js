const express=require("express");
const app=express();
const port=3000;

app.listen(port,()=>{
    console.log("port connected :" + port);
});

app.get('/',(req,res)=>{
    res.send("welcome to the root page");
})

app.get('/:username/:id',(req,res)=>{
    let {username, id}=req.params;
    let htmlcode=`<h1>welcome to the @${username}</h1><h3> your id is ${id}</h3>`
    res.send(htmlcode);
    // res.send(`welcome to the @${username}`);
    // console.log(req.params);
//     res.send("hello, i am root");
})