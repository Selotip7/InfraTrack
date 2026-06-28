import {
  faFile,
  faPaperPlane,
  faEye,
  faCamera,
  faBell,
} from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export default function Guide() {
  const [maxHeight, setMaxHeight] = useState(0);
  const cardRefs = useRef([]);

  const cards = [
    {
      no: 1,
      title: "Buat Laporan",
      desc: "Pilih kategori kerusakan dan berikan deskripsi singkat",
      icon: faFile,
    },
    {
      no: 2,
      title: "Tentukan Lokasi",
      desc: "Pilih lokasi kerusakan langsung pada peta",
      icon: faLocationDot,
    },
    {
      no: 3,
      title: "Unggah Foto",
      desc: "Ambil foto kerusakan",
      icon: faCamera,
    },
    {
      no: 4,
      title: "Kirim & Pantau",
      desc: "Kirim laporan dan pantau status penanganannya",
      icon: faBell,
    },
  ];

  const textInCard = "grid gap-1";
  const cardCont =
    "mobile-l: bg-white  border border-slate-200 rounded-xl p-4 items-center w-full  ";
  const icon =
    "bg-primary rounded-xl p-2.5 h-[40px] w-[40px] mb-3 flex items-center justify-center";

    const updateHeight = () => {
      // 1. Reset dulu semua card
      cardRefs.current.forEach((card) => {
        if (card) card.style.height = "auto";
      });

      // 2. Cari tinggi terbesar
      let tallest = 0;  

      cardRefs.current.forEach((card) => {
        if (card) {
          tallest = Math.max(tallest, card.offsetHeight);
        }
      });

      // 3. Terapkan tinggi yang sama
      cardRefs.current.forEach((card) => {
        if (card) {
          card.style.height = `${tallest}px`;
        }
      });
    };
 useEffect(() => {
   const observer = new ResizeObserver(updateHeight);

   cardRefs.current.forEach((card) => {
     if (card) observer.observe(card);
   });

   updateHeight();

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
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              style={{ height: maxHeight || "auto" }}
              className={`${cardCont} flex gap-3`}
            >
              <div className={icon}>
                {/* <FontAwesomeIcon
                  icon={card.icon}
                  className="text-primary-dark"
                ></FontAwesomeIcon> */}
                <p className="text-primary-dark">{card.no}</p>
              </div>
              <div className={`${textInCard}`}>
                <p className="b um ">{card.title}</p>

                <p className="text-gray-700 text-[15px]">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
