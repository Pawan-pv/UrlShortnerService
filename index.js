
import express from "express";
import { User} from "./model/user.model.js"
import { dbConnect } from "./dbconnect/db.js";
 import { UIrouter, BKrouter } from "./Router/index.js"
import path from "path";
const router = express.Router();

const port = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use((req, res, next) => {
  res.setHeader("X-Powered-By", "ChatGPT");
  next();
});
await dbConnect().then(() => {
  console.log("Database connected");
});
app.use('/UI',UIrouter)
app.use('/BK',BKrouter)

try {
   app.listen(port, () => {
    console.log(`App is running on port ${port} ⚙️⚙️⚙️`);
  });
} catch (error) {
   console.log(error`error while connecting `);
}


  

