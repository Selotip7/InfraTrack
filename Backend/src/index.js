import dotenv from "dotenv"
dotenv.config()

import express from 'express'
import cors from "cors"
// import router
import authRouter from "#src/routes/auth.js"
// import handler
import { errorHandler } from "./handler/errorHandler"

const app=express()
const PORT= process.env.PORT;

// app.get("/",(req,res)=>{
//   res.mess
// })
app.use(express.json());
app.use("/auth",authRouter)
app.use(errorHandler)

app.listen(PORT,()=>{
  console.log(`the server is running in port ${PORT}`)
})