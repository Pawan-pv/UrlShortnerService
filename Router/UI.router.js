import {UI_Home} from '../controllers/index.js';

import express from "express";
const UIrouter = express.Router();

UIrouter
  .get('/',UI_Home)

export { UIrouter }
