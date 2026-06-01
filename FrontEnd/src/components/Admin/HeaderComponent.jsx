import { faBell, faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Header() {
  return (
    <>
      <div className=" w-full flex justify-between px-4 h-[90px]  items-center font-sans ">
        {/* <div className="flex justify-between px-3"> */}
        <div id="left-item" className="">
          <h3 className="text-[20px] font-medium">Dashboard</h3>
          <p className="text-[12px] text-black/60">
            Welcome Back, Admin Here's what's happening today
          </p>
        </div>
        <div id="right-item" className="flex items-center justify-between gap-3 ">
          <button
            id="notification"
            className=" bg-white relative p-2 rounded-md  flex justify-center items-center shadow-[0_0_3px_2px_rgba(0,0,0,0.1)]"
          >
            <FontAwesomeIcon icon={faBell} className="text-icon" />
            <span className="absolute top-[-4px] right-[-4px] w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div
            id="date"
            className=" min-w-20 h-8   bg-white drop-shadow-gray-400  rounded-md shadow-[0_0_3px_2px_rgba(0,0,0,0.1)] flex justify-center items-center   "
          >
            <div className="flex justify-center items-center gap-1 text-sm">
              <FontAwesomeIcon
                // size="s"
                icon={faCalendar}
                className="text-icon"
              ></FontAwesomeIcon>
              <p>May 24, 2026</p>
            </div>
          </div>
    
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
