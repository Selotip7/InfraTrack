import Navbar from "../components/User/Navbar";
import Beranda from "../page/User/Beranda";
import Landing from "../page/User/Landing";

export default function UserLayout() {
  return (
    <>
  <div className="h-screen bg-white">
    <Navbar></Navbar>
    <Beranda></Beranda>
    {/* <div className="h-[1000px]"></div> */}
  </div>
    </>
  )
  
}
