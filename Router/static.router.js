import express from "express";
const router = express.Router();


import {handleUrl, handleUrlhome} from "../controllers/url_handler.js";

import {login} from "../controllers/static.controller.js";

//http//:localhost:3000/url
router 
  .post('/',handleUrl)
  .get('/', handlerUrlhome)
  .get('/login', login)

export { router }
