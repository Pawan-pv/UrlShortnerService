import mongoose from "mongoose";


async function dbConnect(secreat){
  try{
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Connected to MongoDB");
  } catch(err){
    console.log(err);
  }
}

export { dbConnect }