import Navbar from "../components/User/Navbar";

import Beranda from "../page/User/Beranda";
import Fitur from "../page/User/Fitur";
import Guide from "../page/User/Guide";
import Landing from "../page/User/Landing";
import Map from "../page/User/Map";

export default function UserLayout() {
  return (
    <>
  <div className="h-screen bg-white w-full">
    <Navbar></Navbar>
    <Beranda></Beranda>
    <Fitur></Fitur>
    <Guide></Guide>
    <Map></Map>
    {/* <div className="h-[1000px]"></div> */}
  </div>
    </>
  )
  
}
