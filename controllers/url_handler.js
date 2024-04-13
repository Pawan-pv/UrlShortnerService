import { URL } from '../model/url.model.js';
import shortid from 'shortid';

async function handleUrl(req, res) {
  const s_Id = shortid.generate();
  
  if (!req.body) 
    return res.status(400).json({ error: "url is required" });
  
  URL.create({
    shortId: s_Id,
    redirectUrl: req.body.url,
    visitedHistory: [
      { timestamp: Date.now() }
    ]
  });

  console.log(req.body.url, s_Id);

  return res.render('home', {
    shortId: s_Id,
    rediectUrl: req.body.url
  });
}

async function handleUrlhome(req, res) {
  const urls = await URL.find({});
  return res.render('home', {
    urls : urls
  });
}

export { handleUrl, handleUrlhome };
