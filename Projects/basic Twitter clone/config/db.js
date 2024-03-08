import mongoose from "mongoose";

export const db_connect=async(req,res)=>{
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("database connection sucessfully !!");
    } catch (error) {
        console.log("DB CONECTION ISSUES");
        console.log(error);
        process.exit(1);
       
    }
}