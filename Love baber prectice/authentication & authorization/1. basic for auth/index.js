import express from 'express'
import { dbConnect } from './config/db.js';
import dotenv from 'dotenv';
import router from './routes/router.js';

const app=express();

dotenv.config();

dbConnect();

app.use(express.json());
app.use('/',router);

// app.get("/",(req,res)=>{
//     res.send("this is my response");
// })
const port=process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`port is listening on ${port}`);
})