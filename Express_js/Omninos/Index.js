const express=require("express");
const app=express();

// app.use accept all request like get, post, delete, patch
app.use(express.json()); // using this we can send data using body=>raw=>write text and send
const port=1000;

app.listen(port, ()=>{
    console.log("port is using connected: " + port);
});

app.get("/",(req,res)=>{
    console.log("yes comming");
    res.send({
        name: "Preetam",
        id: 1,
        email: "preet@gmail.com"
    });
});

app.post('/first',(req,res)=>{
    let data=req.body;
    res.send(data);
})