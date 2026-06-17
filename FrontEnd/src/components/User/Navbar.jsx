import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
export default function Navbar(){
  const [open,setOpen]=useState(false)
  return (
    <>
      <div className="fixed top-0 left-0 right-0 px-10 bg-white z-50 ">
        <nav className="flex  justify-between items-center  py-3">
          <div className="flex gap-2 items-center flex-shrink-0 ">
            <div id="logo" className="w-[50px]">
              <img src={logo}></img>
            </div>
            <div>
              <h2>InfraTrack</h2>
              <p>Insfrastructure Reporting System</p>
            </div>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon
              icon={faBars}
              // className="text-blue-700"
            ></FontAwesomeIcon>
          </button>
          <ul className="hidden gap-5 lg:flex">
            <li>
              <NavLink to="/">Beranda</NavLink>
            </li>
            <li>
              <NavLink to="/tentang">Tentang</NavLink>
            </li>
            <li>
              <NavLink to="/cara-kerja">Cara kerja</NavLink>
            </li>
            <li>
              <NavLink to="/kontak">Kontak</NavLink>
            </li>
          </ul>

          <div className="lg:flex gap-5 hidden ">
            <NavLink to="#">Masuk/ Daftar</NavLink>
          </div>
        </nav>
      </div>
      <div id="collapse" className="min-h-10 bg">
        {open && (
          <div className="fixed absolute right-5 top-20 border border-slate-200 bg-white py-3 rounded-lg w-[200px] px-2 lg:hidden z-50">
            <ul className="flex flex-col gap-3 px-3">
              <li>
                <NavLink to="/">Beranda</NavLink>
              </li>
              <li>
                <NavLink to="/tentang">Tentang</NavLink>
              </li>
              <li>
                <NavLink to="/cara-kerja">Cara kerja</NavLink>
              </li>
              <li>
                <NavLink to="/kontak">Kontak</NavLink>
              </li>
              <li>
                <NavLink to="#">Masuk/Daftar</NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}