import { connect } from "mongoose";

const connectDatabase = async () => {
  try {
    const mongoURI: string = "mongodb://localhost:27017/cryptoPortfolio";

    await connect(mongoURI);

    console.log("MongoDB Connected!");
  } catch (error) {
    console.error("MongoDB connection Failure", error);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDatabase;