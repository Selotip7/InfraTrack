import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile,faPaperPlane,faEye} from "@fortawesome/free-regular-svg-icons";
import {faMicrochip,faFileCircleCheck,faUserGroup } from  "@fortawesome/free-solid-svg-icons"
export default function Fitur() {
  const cardCont =
    " w-full bg-white  border border-slate-200 rounded-xl p-4 w-full flex flex-col items-center md:items-start ";
  return (
    <>
      <div
        id="Fitur"
        className="mt-10 mobile-m:mt-0 bg-white  w-full  flex flex-col px-10 py-5 gap-4"
      >
        <div>
          <p className="text-[14px] text-primary-dark text-center font-semibold ">
            FITUR UNGGULAN
          </p>
          <p className="text-2xl font-semibold text-center ">
            Teknologi untuk Pelaporan yang Lebih Cerdas
          </p>
        </div>
        <div className="grid justify-center gap-3 md:flex md:gap-5 w-full">
          <div className={`${cardCont} bg-amber-600 `}>
            <div className="bg-primary rounded-xl p-2.5 h-[40px] w-[40px] mb-3 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faFile}
                className="text-primary-dark"
              ></FontAwesomeIcon>
            </div>
            <div className="flex flex-col gap-1 items-center md:items-start">
              <p className="font-medium text-xl ">Pelaporan Mudah</p>
              <p className="text-gray-700 text-center md:text-start">
                Laporkan kerusakan hanya dalam beberapa langkah sederhana
                melalui website
              </p>
            </div>
          </div>
          <div className={`${cardCont}`}>
            <div className="bg-primary rounded-xl p-2.5 h-[40px] w-[40px] mb-3 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faMicrochip}
                className="text-primary-dark"
              ></FontAwesomeIcon>
            </div>
            <div className="flex flex-col gap-1 items-center md:items-start">
              <p className="font-medium text-xl ">Deteksi Ai Otomatis</p>
              <p className="text-gray-700 text-center md:text-start">
                AI kami mendeteksi jenis dan tingkat kerusakan secara otomatis
                untuk membantu percepatan verifikasi
              </p>
            </div>
          </div>
          <div className={`${cardCont}`}>
            <div className="bg-primary rounded-xl p-2.5 h-[40px] w-[40px] mb-3 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="text-primary-dark"
              ></FontAwesomeIcon>
            </div>
            <div className="flex flex-col gap-1 items-center md:items-start">
              <p className="font-medium text-xl ">Respon Lebih Cepat</p>
              <p className="text-gray-700  text-center md:text-start">
                Laporan langsung diteruskan ke petugas terkait untuk
                ditindaklanjuti secepat mungkin
              </p>
            </div>
          </div>
          <div className={`${cardCont}`}>
            <div className="bg-primary rounded-xl p-2.5 h-[40px] w-[40px] mb-3 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faEye}
                className="text-primary-dark"
              ></FontAwesomeIcon>
            </div>
            <div className="flex flex-col gap-1 items-center md:items-start">
              <p className="font-medium text-xl ">Transparan & Terbuka</p>
              <p className="text-gray-700 text-center md:text-start">
                Pantau status laporan anda secara real-time hingga selesai
                ditangani
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
