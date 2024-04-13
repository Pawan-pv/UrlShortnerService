import ejs from "ejs";
import express from "express";
import { dbConnect } from "./dbconnect/db.js";
 import { UIrouter, BKrouter } from "./Router/index.js"
import path from "path";

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

app.use('/',UIrouter)
app.use('/B',BKrouter)

await dbConnect().then(() => {
  console.log("Database connected");
});

  

try {
  app.listen(port, () => {
    console.log(`App is running on port ${port} ⚙️⚙️⚙️`);
  });
} catch (error) {
  console.log(error);
}
