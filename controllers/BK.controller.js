import { URL } from '../model/url.model.js';
import { User } from '../model/user.model.js';
import shortid from 'shortid';

async function Bk_Home_Data(req, res) {
  try {
    if (!req.body.url) { 
      return res.status(400).json({ error: "URL is required" });
    }
    
    const s_Id = shortid.generate();
    await URL.create({
      shortId: s_Id,
      redirectUrl: req.body.url,
      visitedHistory: [{ timestamp: Date.now() }]
    });
    
    console.log(req.body.url, s_Id);
    
    return res.render('home', { redirectUrl: req.body.url });
  } catch (error) {
    console.log(error, "Error occurred in function Bk_Home_Data in BK.controller.js");
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function Bk_Url_List(req, res) {
  try {
    const urls = await URL.find({});
    return res.render('list_urls', { urls });
  } catch (error) {
    console.log(error, "Error occurred in function Bk_Url_List in BK.controller.js");
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function BK_signup(req, res) {
  try {
    if (!req.body.username || !req.body.email || !req.body.password) { 
      return res.status(400).json({ error: "Username, email, and password are required" });
    }

    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password, // Password should be hashed before storing
    });

    console.log(user);
    res.redirect('/UI/login');
  } catch (error) {
    console.log(error, "Error occurred while creating user in BK_signup function");
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function BK_login(req, res) {
  try {
    if (!req.body.email || !req.body.password) { 
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password, // Password should be hashed and compared
    });

    console.log(user);
    console.log(req.body.email);

    if (!user) {
      return res.redirect('/UI/login'); // Redirect to login page if user not found
    }

    // Redirect to dashboard or home page if user is found
    res.redirect("/UI");
  } catch (error) {
    console.log(error, "Error occurred while finding the user in BK_login function");
    return res.status(500).json({ error: "Internal server error" });
  }
}

export {
  Bk_Home_Data,
  Bk_Url_List,
  BK_signup,
  BK_login
};






































// import {URL} from '../model/url.model.js'
// import {User} from '../model/user.model.js'
// import shortid from 'shortid'

// async function Bk_Home_Data(req, res){
// try {
//    const s_Id = shortid.generate();
// if (!req.body){ 
//   return res
//     .status(400)
//     .json({ error: "url is required" });
// }
//   URL.create({
//     shortId: s_Id,
//     redirectUrl: req.body.url,
//     visitedHistory: [
//       { timestamp: Date.now() }
//     ]
//   });
//   console.log(req.body.url, s_Id);
//   return res.render('home', {
//     rediectUrl: req.body.url
//   });
// } catch (error) {
//    console.log(error,"error cause in -fn(Bk_Home_Data)- in file -->BK.controller.js ");
// }
// }

//    async function Bk_Url_List(req, res){
//   try {
//      const urls = await URL.find({})
//   return res.render('list_urls',{urls})
//   } catch (error) {
//      console.log(error,"error cause in -fn(Bk_Url_List)- in file -->BK.controller.js ");
//   }
// }
// let user;
// async function BK_signup(req, res) {
//    try {
//     if (!req.body){ 
//       return res
//         .status(400)
//         .json({ error: "url is required" });
//     }
//      user = await User.create({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password,
//     });
//     console.log(user);
//     res.redirect('/UI/login');
//   } catch (error) {
//     console.log(error, " creating user - ⚠️⚠️⚠️- something is happened ");
//   }
// }
// async function BK_login(req, res){
//   try {
//     if (!req.body){ 
//       return res
//         .status(400)
//         .json({ error: "e-mail and password is required" });
//     }
//     const {email, 
//            password} = req.body
      
//     const user = await User.findOne({
//       email: email,
//       password: password,
//     });
//     console.log(user);
//     console.log(email);
//     console.log(password);
    
//     if (!user) return res.redirect('/UI/signup');

//     res.redirect("/UI/signup")
//   } catch (error) {
//     console.log(error, "⚠️⚠️⚠️- something happened while finding the user");
//     return res.status(500).json({ error: "Internal server error" });
//   }
// }


  
// export {
//   Bk_Home_Data,
//   Bk_Url_List,
//   BK_signup,
//   BK_login
// }