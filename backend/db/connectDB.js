import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/Kmail"
    );
    console.log("Mongodb connected successfully.");
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
