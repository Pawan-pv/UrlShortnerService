import {URL} from '../model/url.model.js'

async function AllUrlsFront(req, res){
  try {
    const allUrls = await     
      URL.find({});
      res.render('index', { 
      urls: allUrls
      }); 
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(`Internal Server 
       Error: on AllUrlsFront`);
  }
}

export {AllUrlsFront}