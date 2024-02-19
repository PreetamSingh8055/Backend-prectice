const express=require("express");
const app=express();
const port =3000;

// both statement are used to make the understandable for express
app.use(express.urlencoded({extended :true })); // this line is used to parse url data to readable data for post request
app.use(express.json()); // this line is used to read the json data

app.get("/register",(req,res)=>{
    let {username, password}=req.query;
    res.send(`Standered GET request, welcome  <h1>${username} </h1> `);
});
app.post("/register",(req,res)=>{
    console.log(req.body); // above if we dont declare the statements req.body will be undefined
    let {user, password}=req.body;
    res.send(`Standered POST request, welcome <h1> ${user} </h1>`);
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})