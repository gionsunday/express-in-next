import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is Connected");
  }

  try {
    await mongoose.connect(process.env.NEW_ACTUAL_STRING, {
      dbName: "express-in-next",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;

    console.log("Mongodb Connected");
  } catch (error) {
    console.log(error);
  }
};
