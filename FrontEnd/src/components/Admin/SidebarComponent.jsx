import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse,faFileLines,faMap} from '@fortawesome/free-regular-svg-icons'
import {faChartLine} from "@fortawesome/free-solid-svg-icons"
export default function Sidebar(){
  const linkClass =
    "flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100";

  return (
    <>
      
      <div className="flex flex-col w-56 h-screen bg-primary-admin text-white ">
        <div
          id="brand"
          className="relative flex py-4 items-center gap-3 px-3 after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-[90%] after:-translate-x-1/2 after:bg-white"
        >
          <div id="logo" className="w-[50px] ">
            <img src={logo} className="rounded-[5px]" />
          </div>
          <div id="brand-text" className=" flex flex-col ">
            <p className="font-medium leading-5 text-[20px]">InfraTrack</p>
            <p className="text-[12px]">Monitoring System</p>
          </div>
        </div>
        <nav className="mt-5">
          <ul className="space-y-2 px-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${linkClass} ${
                    isActive ? "bg-primary text-white" : "hover:bg-gray-100"
                  }`
                }
              >
                <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${linkClass} ${
                    isActive ? "bg-primary text-white" : "hover:bg-gray-100"
                  }`
                }
              >
                
                  <FontAwesomeIcon icon={faFileLines}></FontAwesomeIcon>
                  <span>Reports</span>
                
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${linkClass} ${
                    isActive ? "bg-primary text-white" : "hover:bg-gray-100"
                  }`
                }
              >
                
                  <FontAwesomeIcon icon={faMap}></FontAwesomeIcon>
                  <span>Map monitoring</span>
               
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${linkClass} ${
                    isActive ? "bg-primary text-white" : "hover:bg-gray-100"
                  }`
                }
              >
                
                  <FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon>
                  <span>Analytics</span>
                
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}