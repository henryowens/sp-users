import { connect } from "mongoose";

const connectDB = async () => {
  try {
    const options = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };
    await connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@social-point.tlkcf.mongodb.net/users?retryWrites=true&w=majority`,
      options
    );
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("MongoDB Failed to Connect...", err.message);
    process.exit(1);
  }
};

export { connectDB };
