import express from "express"
import {upload} from "#src/middlewares/upload.middleware.js"
import { upReport } from "#src/controllers/report.controller.js";

const router = express.Router()

// images adalah nama dari field input di html
router.post("/", upload.array("images"), upReport);
export default router

