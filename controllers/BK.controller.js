import {URL} from '../model/url.model.js'
import shortid from 'shortid'


async function Bk_Home_Data(req, res){
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
  }
async function Bk_Url_List(req, res){
  const urls = await URL.find({})
  return res.render('list_urls',{urls})
}

export {
  Bk_Home_Data,
  Bk_Url_List
}