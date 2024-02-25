import mongoose from "mongoose";


   const DB_link="mongodb://mongodb8055:5508bdognom@ac-9r0h29o-shard-00-00.jmzzsxj.mongodb.net:27017,ac-9r0h29o-shard-00-01.jmzzsxj.mongodb.net:27017,ac-9r0h29o-shard-00-02.jmzzsxj.mongodb.net:27017/maindb?ssl=true&replicaSet=atlas-6i6iw8-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

   export const connectDB = async ()=> {
 try{
    await  mongoose.connect(DB_link);
    console.log("Database is connected succesfully");
 }
 catch(error)
 {
    console.log(error);
 }

}