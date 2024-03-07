import express from 'express'
import router from  './routes/router.js'
import dotenv from  'dotenv'
import { db_connect } from './config/db.js';
import bodyParser from 'body-parser';
// import path from  'path'




const app=express();

dotenv.config();

//middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',router);
app.set("view engine", "ejs");
app.use(express.static('public'));

//database connections
db_connect();

//set views
// app.set("views", path.join(__dirname, 'views'));

// app.set(express.static(path.join('/', 'public')));

app.get('/',(req,res)=>{
    res.send("this is a response");
})

const port=process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`port is listening on ${port}`);
})

