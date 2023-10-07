import mongoose from "mongoose";

const Connection = async (username , password) => {
    const URL = `mongodb+srv://${username}:${password}@blog.iyotg0n.mongodb.net/?retryWrites=true&w=majority`
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database not connected", error);
  }
};

export default Connection;
