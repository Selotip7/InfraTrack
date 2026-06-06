import express from "express"
import upload from "#src/middlewares/upload.middleware.js"

const router = express.Router()

// images adalah nama dari field input di html
router.post("/reports",upload.array("images"),createReport)
export default router

