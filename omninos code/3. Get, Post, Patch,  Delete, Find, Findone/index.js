import express from "express";
import { connectDB } from "./config/db.js";
import router from "./routes/rutor.js";

const app=express();

app.use(express.json());
app.use('/',router);


//database connection 
connectDB();


const port=8080;
app.listen(port,()=>{
    console.log(`port is listening on ${port} ` );
});


