import mongoose from 'mongoose'

export const dbconnect= async ()=>{
    try {
         await mongoose.connect(process.env.DB_URL);
        //  ,{ useNewUrlParser: true, useUnifiedTopology:true }
         console.log("database connection successfull !");
    } catch (error) {
        console.log(error)
    }
}