import "./index.css";
import Dashboard from "./page/Admin/Dashboard";
import {Routes, Route} from "react-router-dom"
import UserLayout from "./Layouts/UserLayout"
import AdminLayout from "./Layouts/AdminLayout";
import Landing from "./page/User/Landing";

const app=()=>{
  return (
    <>
    <Routes>
      <Route path="/" element={<UserLayout/>}>
      </Route>
      <Route path="/admin" element={<AdminLayout/>}>
        <Route index element={<Dashboard/>}/>
      </Route>
      
    </Routes>

    {/* ai */}
    {/* <DashboardAI></DashboardAI> */}
    </>

    
  )
}

export default app;