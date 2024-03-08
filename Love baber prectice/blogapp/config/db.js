import mongoose from 'mongoose'

export const db_connect= async()=>{
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("database connect sucessfully");
    } catch (error) {
        console.log("db conection issue");
        console.error(error);
        process.exit(1);
    }
}