import express from "express"
import * as auth from "#src/controllers/auth.js"

const router=express.Router();

router.post("/registration",auth.register);

export default router