import express from "express";
import {
  Bk_Home_Data,
  Bk_Url_List
} from "../controllers/index.js";
const BKrouter = express.Router();


BKrouter
  .post('/Back_Home',Bk_Home_Data)
  .get('/Back_Home',Bk_Url_List)

export { BKrouter}