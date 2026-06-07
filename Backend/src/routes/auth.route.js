import express from "express"
import * as auth from "#src/controllers/auth.controller.js"

const router=express.Router();

router.post("/register",auth.register);
router.post("/login", auth.login);
export default router