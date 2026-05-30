import { Outlet } from "react-router-dom";
import Sidebar from "../components/Admin/SidebarComponent";
import Header from "../components/Admin/HeaderComponent";

export default function AdminLayout() {
  return (
    <>
      <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
        
        <Sidebar></Sidebar>
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header></Header>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
