import mongoose from 'mongoose';

const DB_link="mongodb://mongodb8055:5508bd@ac-mmbeus0-shard-00-00.dtrxorc.mongodb.net:27017,ac-mmbeus0-shard-00-01.dtrxorc.mongodb.net:27017,ac-mmbeus0-shard-00-02.dtrxorc.mongodb.net:27017/container?ssl=true&replicaSet=atlas-4xz2ep-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

 export const connectDB= async()=>{
    try{
        await mongoose.connect(DB_link);
        console.log("database connection sucessfully");
    }
    catch(error)
    {
        console.log("this is db connection error" + error);
    }
}
