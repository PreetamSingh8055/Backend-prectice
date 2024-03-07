import express from 'express'
import dotenv from "dotenv"
import {dbconnect} from "./config/DB.js"
import router from  './routes/router.js'

dotenv.config();

const app=express();
dbconnect();

app.use(express.json());
app.use('/',router);


// app.get("/",(req,res)=>{
//     res.send("this is my response");
// })


const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Server is listening on port " + port);
})