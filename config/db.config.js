import mongoose from "mongoose";

export async function connect() {
  try {
    const dbConnect = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`Connected to db: ${dbConnect.connection.name}`);
  } catch (err) {
    console.log(err);
  }
}
