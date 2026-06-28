import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        open &&
        menuRef.current &&
        // {
        //agar saat menuReff null js tdk lanjut proses !menuRef.current.contains(event.target) sehingga tdk error
        // menuRef = object (selalu truthy, tidak pernah null)
        // menuRef.current = isi dalamnya (bisa null atau elemen DOM)
        // }
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);
  return (
    <>
      <div className="fixed top-0 left-0 right-0 px-10 bg-white z-[1000] ">
        <nav className="flex  justify-between items-center  py-3">
          <div className="flex gap-2 items-center flex-shrink-0 ">
            <div id="logo" className="w-[40px] xxs:w-[50px]">
              <img src={logo}></img>
            </div>
            <div>
              <h2 className="text-lg! xxs:text-2xl!">InfraTrack</h2>
              <p className="hidden xxs:block">
                Insfrastructure Reporting System
              </p>
            </div>
          </div>

          <button
            ref={buttonRef}
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
              <a href="#Beranda">Beranda</a>
            </li>
            <li>
              <a href="#Fitur">Tentang</a>
            </li>
            <li>
              <a href="#Cara_kerja">Cara kerja</a>
            </li>
            <li>
              <a href="#Kontak">Kontak</a>
            </li>
          </ul>

          <div className="lg:flex gap-5 hidden ">
            <a to="#">Masuk/ Daftar</a>
          </div>
        </nav>
      </div>
      <div id="collapse" className="min-h-10 bg">
        {open && (
          <div
            ref={menuRef}
            className="fixed absolute right-5 top-20 border border-slate-200 bg-white py-3 rounded-lg w-[200px] px-2 lg:hidden z-1000"
          >
            <ul className="flex flex-col gap-3 px-3">
              <li>
                <a href="#Beranda">Beranda</a>
              </li>
              <li>
                <a href="#Fitur">Tentang</a>
              </li>
              <li>
                <a href="#Cara_kerja">Cara kerja</a>
              </li>
              <li>
                <a href="#Kontak">Kontak</a>
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
