import {
  faFile,
  faPaperPlane,
  faEye,
  faCamera,
  faBell
} from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";


export default function Guide() {
  const [maxHeight, setMaxHeight] = useState(0);
  const cardRefs = useRef([]);

  const textInCard = "grid gap-1";
  const cardCont =
     "mobile-l: bg-white  border border-slate-200 rounded-xl p-4 items-center w-full  ";
  const icon =
    "bg-primary rounded-xl p-2.5 h-[40px] w-[40px] mb-3 flex items-center justify-center";
  
    useEffect(() => {
      const observer = new ResizeObserver(() => {
        let tallest = 0;

        cardRefs.current.forEach((card) => {
          if (!card) return;

          tallest = Math.max(tallest, card.offsetHeight);
        });

        setMaxHeight(tallest);
      });

      cardRefs.current.forEach((card) => {
        if (card) observer.observe(card);
      });

      return () => observer.disconnect();
    }, []);

    return (
    <div id="Cara_kerja" className="flex flex-col gap-10 mt-5 w-full px-10">
      <div>
        <p className=" text-primary-dark font-semibold text-center">
          CARA KERJA
        </p>
        <div class="connector-col"></div>
        <p className="text-2xl font-semibold text-center">
          Laporkan dalam 4 Langkah Mudah
        </p>
      </div>
      <div className="grid grid-cols-1    gap-3">
        {/* <div className="md:grid flex flex-col items-center gap-3"> */}
        <div   ref={(el) => (cardRefs.current[0] = el)}  style={{ height: maxHeight || "auto" }} className={`${cardCont} flex gap-3 `}>
          <div className={icon}>
            {/* <p className="font-bold text-primary-dark">1</p> */}
            <FontAwesomeIcon
              icon={faFile}
              className="text-primary-dark"
            ></FontAwesomeIcon>
          </div>
          <div className={`${textInCard}`}>
            <p className="font-medium">Buat Laporan</p>
            <p className="text-gray-700">
              Pilih kategori kerusakan dan berikan deskripsi singkat
            </p>
          </div>
        </div>

        <svg
          className="absolute"
          width="80"
          height="22"
          viewBox="0 0 80 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 16 Q20 4 40 14 Q60 18 70 7"
            stroke="#b0c8c1"
            stroke-width="1.5"
            stroke-dasharray="5 4"
            fill="none"
            stroke-linecap="round"
          />
          <polygon points="76,6.5 68,5 71.5,12" fill="#b0c8c1" />
        </svg>

        <div    ref={(el) => (cardRefs.current[0] = el)}  style={{ height: maxHeight || "auto" }} className={`${cardCont} flex gap-3 `}>
          <div className={icon}>
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-primary-dark"
            ></FontAwesomeIcon>
          </div>
          <div className={`${textInCard}`}>
            <p className="font-medium">Tentukan Lokasi</p>
            <p className="text-gray-700">
              Pilih lokasi kerusakan langsung pada peta
            </p>
          </div>
        </div>
        <div   ref={(el) => (cardRefs.current[0] = el)}  style={{ height: maxHeight || "auto" }} className={`${cardCont} flex gap-3`}>
          <div className={icon}>
            <FontAwesomeIcon
              icon={faCamera}
              className="text-primary-dark"
            ></FontAwesomeIcon>
          </div>
          <div className={`${textInCard}`}>
            <p className="font-medium">Unggah Foto</p>
            <p className="text-gray-700">Ambil foto kerusakan</p>
          </div>
        </div>
        <div   ref={(el) => (cardRefs.current[0] = el)}  style={{ height: maxHeight || "auto" }} className={`${cardCont} flex gap-3`}>
          <div className={icon}>
            <FontAwesomeIcon
              icon={faBell}
              className="text-primary-dark"
            ></FontAwesomeIcon>
          </div>
          <div className={`${textInCard}`}>
            <p className="font-medium">Kirim & Pantau</p>
            <p className="text-gray-700">
              Kirim laporan dan pantau status penanganannya
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
