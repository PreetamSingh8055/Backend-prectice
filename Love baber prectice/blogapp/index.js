import express from "express";
import dotenv from  "dotenv";
import { db_connect } from "./config/db.js";
import router from './routes/router.js'

dotenv.config();

const app=express();

app.use(express.json());

db_connect();

app.use("/api/v1",router);

app.get('/',(req,res)=>{
    res.send("this is a response");
})

const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`port is listening on ${port}`);
})
