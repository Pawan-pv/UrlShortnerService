import express from "express";
import {AllUrlsFront} from "../controllers/url.controllers.js";
const router = express.Router();

router
  .get('/', (req, res) => {
  return res.render('home');
})
  .get('/login', (req, res) => {
  return res.render('login');
})
 .get('/ejs',AllUrlsFront);

export default router
