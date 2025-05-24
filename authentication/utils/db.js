import mongoose from "mongoose"

const db = ( )=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("connected to mongodb");
    })
    .catch((err)=>{
        console.log("failed connecting to mongodb");
        console.log(err);
    })
}

export default db;