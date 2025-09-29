import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    console.log("DB ...");
    await mongoose.connect(`${process.env.MONGO_URI}/db`);
    console.log("Connected Successfully");
  } catch (error) {
    console.log(error.message);
    process.exit(-1);
  }
};

export default connectToDB;
