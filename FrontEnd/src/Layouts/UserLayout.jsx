import Navbar from "../components/User/Navbar";
import About from "../page/User/About";
import Beranda from "../page/User/Beranda";
import Landing from "../page/User/Landing";

export default function UserLayout() {
  return (
    <>
  <div className="h-screen bg-white w-full">
    <Navbar></Navbar>
    <Beranda></Beranda>
    <About></About>
    {/* <div className="h-[1000px]"></div> */}
  </div>
    </>
  )
  
}
