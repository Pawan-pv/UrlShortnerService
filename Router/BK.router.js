import express from "express";
import {
  Bk_Home_Data,
  Bk_Url_List,
  BK_signup,
  BK_login
} from "../controllers/index.js";
const BKrouter = express.Router();


BKrouter
  .post('/Back_Home',Bk_Home_Data)
  .get('/Back_Home',Bk_Url_List)
  .post('/signup',BK_signup)
  .post('/login',BK_login)
  


export { BKrouter}