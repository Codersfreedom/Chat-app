import express from 'express'

import { getUsersForSidebar,searchUser,getlastMessage,setLastMessage } from '../controller/user.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.get("/",protectRoute ,getUsersForSidebar);
router.post("/search",protectRoute,searchUser);
router.get("/getlastmessage/:id",protectRoute,getlastMessage);
router.post("/setlastmessage/:id",protectRoute,setLastMessage);

export default router;