import mongoose from "mongoose";

const connectDB = async () => {
    try {
            mongoose.connect(process.env.mongoDB_URI);
            console.log("Connected to database");
    } catch (error) {
        console.log("Con't connect to database",error.messsage)
    }
}
export default connectDB;