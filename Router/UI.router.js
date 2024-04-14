import {UI_Home, UI_signup ,UI_login} from '../controllers/index.js';

import express from "express";
const UIrouter = express.Router();

UIrouter
  .get('/',UI_Home)
  .get('/signup',UI_signup)
  .get('/login',UI_login)

//://{....https}/UI/
//://{....https}/UI/UI_signup
//://{....https}/UI/UI_login

export { UIrouter }
