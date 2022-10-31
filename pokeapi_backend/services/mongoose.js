import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config('../.env');
const key = process.env.MONGOOSE_KEY;

function connect(){
mongoose
  .connect(key)
  .then(() => console.log("Connected successful!"))
  .catch((e) => console.log(e));
}

export default connect
