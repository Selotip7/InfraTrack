import pool from "../conn.js"
import bcrypt from  "bcrypt"

export const register=async (req) =>{
  const {name,email,password,role_id}=req.body;
  const hashedPassword = await bcrypt.hash(password,10)
  // console.log("hashed password:", hashedPassword);
  const result=await pool.query(
    "insert into users (name,email,password,role_id) values ($1,$2,$3,$4) returning *",
    [name,email,hashedPassword,role_id],
  );
  console.log("result",result);
  return result


}


export const login=async(req)=>{
  const {email}=req.body
  const data=await pool.query(
    "select * from users where email = $1",
    [email]
  )

  if(data.rowCount===0){
      throw new Error("User not found")
  }
  return data.rows[0];
  // const isMatch=await bcrypt.compare()
};
