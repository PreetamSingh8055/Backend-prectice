import mongoose from "mongoose";


// const DB_URL = 'mongodb://sahil01sept2002:Sahil123456@ac-vimqwje-shard-00-00.agh2mqk.mongodb.net:27017,ac-vimqwje-shard-00-01.agh2mqk.mongodb.net:27017,ac-vimqwje-shard-00-02.agh2mqk.mongodb.net:27017/testUser?ssl=true&replicaSet=a';
  const DB_URL='mongodb://mongodb8055:5508bdognom@ac-9r0h29o-shard-00-00.jmzzsxj.mongodb.net:27017,ac-9r0h29o-shard-00-01.jmzzsxj.mongodb.net:27017,ac-9r0h29o-shard-00-02.jmzzsxj.mongodb.net:27017/testUser?ssl=true&replicaSet=atlas-6i6iw8-shard-0&authSource=admin&retryWrites=true&w=majority'

  export const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Database is conneted succesfully ")

  } catch (error) {
    console.log(error)
  }
}