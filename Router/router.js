import express from "express";
import {handleUrl , handleUrlhome, handleShortId , handleAllUrl} from "../controllers/url_handler.js";
const router = express.Router()

//http//:localhost:3000/url
// router.get('/',handleAllUrl)
//       .post(handleUrl)
//       .get('/:s_Id',handleShortId)


export default router