import express from "express";
import { connectDB } from "./config/db.js";
import userRouter from   "./routes/router.js";

//create a var
const app=express();

//routing
app.use(express.json());
app.use("/",userRouter);

// app.get('/',(req,res)=>{
//     res.send("this is a get response");
// })


//Database
connectDB();

//port 
const port=4000;
app.listen(port,()=>{
    console.log(`port is listening on ${port}`);
})