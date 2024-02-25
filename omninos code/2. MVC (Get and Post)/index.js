import express from 'express'
import { connectDB } from './config/db.js';   
import userRouter from './routes/user.js'

const app = express();

app.use(express.json());
app.use('/',userRouter)

// DATABASE 
connectDB();


// Listner 
const PORT = 8080;
app.listen(PORT,() =>{
  console.log(`Server is runnin on ${PORT}`)
})