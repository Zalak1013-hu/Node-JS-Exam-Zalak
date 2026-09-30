import mongoose from "mongoose";

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGODBURI);
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection error:", error.message);
  }
};

export default db();
