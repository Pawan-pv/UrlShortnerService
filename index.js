import ejs from "ejs";
import shortid from 'shortid';
import express from "express";
import { dbConnect } from "./dbconnect/db.js";
import { URL } from "./model/url.model.js";
// import { router } from "./Router/static.router.js";
import path from "path";


const port = process.env.PORT || 3000;
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

  app.get('/',(req, res)=>{
    return res.render("home")
  })

  app.post('/Back_Home',async (req, res)=>{
const s_Id = shortid.generate();
if (!req.body){ 
  return res
    .status(400)
    .json({ error: "url is required" });
}
  URL.create({
    shortId: s_Id,
    redirectUrl: req.body.url,
    visitedHistory: [
      { timestamp: Date.now() }
    ]
  });
  console.log(req.body.url, s_Id);
  return res.render('home', {
    rediectUrl: req.body.url
  });
})

app.get('/Back_Home',async(req, res)=>{
  const urls = await URL.find({})
  return res.render('list_urls',{urls})
})
  



try {
  app.listen(port, () => {
    console.log(`App is running on port ${port} ⚙️⚙️⚙️`);
  });
} catch (error) {
  console.log(error);
}
