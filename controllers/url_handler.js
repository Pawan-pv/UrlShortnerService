import {URL} from '../model/url.model.js'
import shortid from 'shortid';

async function handleUrlhome(req, res){
  res.send("Welcome to URL Shortener Microservice")
}
async function handleUrl(req, res) {
  
  const s_Id = shortid.generate();
  if (!req.body) return res.status(400)
.json({error: "url is required"});
  
   URL.create({
      shortId: s_Id ,
      redirectUrl: req.body.url,
      visitedHistory: [
        { timestamp: Date.now() }
      ]
   })
  console.log(req.body.url)
  console.log(req.body.url)
  console.log(req.body.url)
  res.status(200).json({id: s_Id})
}

async function handleShortId(req, res) {
  const s_Id = req.params.s_Id;
  const entry = await URL.findOneAndUpdate(
    {
      shortId: s_Id
    },
    // {
    //   $push: {
    //     visitedHistory: {
    //       timestamp: Date.now()
    //     }
    //   }
    // }
  )
  res.send(entry)
 // res.redirect(entry.redirectUrl)
}
async function handleAllUrl(req, res){

 const allUrls = await URL.find({});
    const html = `
  <div>${allUrls.map(url => `<p>${url}</p>`)}
  </div>
  `
  res.send(html);
  }
  
export { handleUrl,
        handleUrlhome,
        handleShortId,
        handleAllUrl
       };