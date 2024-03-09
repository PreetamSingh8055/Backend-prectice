import mongoose from 'mongoose'

export const dbConnect= async ()=>{
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('database connect sucessfully');
    } catch (error) {
        console.log("db connection issue");
        console.error(error);
        process.exit(1);
    }
}