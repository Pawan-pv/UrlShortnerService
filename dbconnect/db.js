import mongoose from "mongoose";

const secreat = process.env['Db_key']
const db_config=`mongodb+srv://pawanwarhade36:${process.env['Db_key']}@cluster0.rdt8lno.mongodb.net/?retryWrites=true&w=majority`

async function dbConnect(){
  try{
  await mongoose
  .connect(db_config);
  console
  .log("Connected to MongoDB📁📁📁");
  } catch(err){
    console.log(err);
  }
}
export { dbConnect }