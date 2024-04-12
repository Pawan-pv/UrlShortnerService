import ejs from "ejs";
import express from "express";
import {dbConnect} from "./dbconnect/db.js";
import {URL} from "./model/url.model.js"
import { urlrouter , staticRouter} from "./Router/index.js";
import path from 'path';

const port = process.env.PORT || 3000;
const app = express();

//middleware -express db
app.use(express.urlencoded({extended: true}));
app.use(express.json());

await dbConnect().then(() => {
  console.log("Database connected")
})
//ejs middleware 
app.set('view engine', 'ejs');
app.set('views', 
path.resolve('./views'))
//backend middleware 
app.use('/url', urlrouter);
//frontend satic middleware 
app.use('/',staticRouter)

try{
    app.listen(port, () => {
      console.log(`App is running on port ${port} ⚙️⚙️⚙️`);
    });
} catch (error) {
  console.log(error);
}