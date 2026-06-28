import { NavLink } from "react-router-dom";
import background from "../../assets/Background.png";
import {
  faUpload,
  faHome,
  
  faUserGroup,
  faFileCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Beranda() {
  // const [screenSize,setScreenSize]=useState(window.innerWidth)
  const firstCard =
    "flex flex-col bg-white  rounded-xl border border-slate-200 p-4  items-center ";

  const md = "flex items-center justify-center";
  return (
    <>
      <style>
        {`
        .custom-shape-divider-bottom-1781333090 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-bottom-1781333090 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 59px;
}

.custom-shape-divider-bottom-1781333090 .shape-fill {
    fill: #FFFFFF;
}
      `}
      </style>
      <div
        id="Beranda"
        className=" flex flex-col mt-[40px]  w-full h-[800px] mobile-l:h-[650px]  mobile-m:h-[700px]  sm:h-[600px] lg:h-[610px] bg-no-repeat  bg-cover bg-center pt-5 "
        // style={{1
        //   backgroundImage: `url(${background})`,
        //   // backgroundSize: cive,
        // }}
      >
        <img src={background} className="w-[2000px] h-[520px] "></img>

        <div className="items-center sm:items-start px-10 flex flex-col gap-[25px] xxs:gap-[40px] absolute  w-full ">
          <p className="text-center  py-1 px-2 bg-primary max-w-[280px] text-[13px] font-medium rounded-2xl">
            Sistem Laporan Infrastruktur Berbasis AI
          </p>
          <div className="text-[30px] max-w-[400px] leading-10 sm:text-[48px]    ">
            <h1 className="font-semibold! text-center sm:text-start">
              Laporkan Kerusakan, bangun Insfrastruktur Yang Lebih Baik
            </h1>
          </div>
          <p className="sm:max-w-[400px]  md:max-w-[600px] text-center text-justify font-medium text-gray-800 md:text-[16px]">
            InfraTrack memudahkan masyarakat untuk melaporkan kerusakan
            infrastruktur di sekitar dengan cepat. Laporan anda akan membantu
            pemerintah dan pihak terkait untuk merespon lebih cepat dan tepat
          </p>
          <div className="flex flex-col w-full justify-center gap-3 text-center sm:flex-row sm:w-auto z-1">
            <NavLink
              to="/"
              className="bg-primary-dark p-2.5 py-3.5 rounded-xl mr-3 w-full sm:w-auto "
            >
              <FontAwesomeIcon icon={faUpload} className="mr-2" />
              Buat Laporan
            </NavLink>
            <NavLink
              to="/"
              className=" p-2.5 py-3.5 rounded-xl border border-slate-400 bg-gray-100 w-full sm:w-auto"
            >
              Lihat Peta Kerusakan
            </NavLink>
          </div>
          <div
            id="STATS_REPORT_WIDE"
            className="hidden sm:flex   items-center justify-center  w-full"
          >
            <div
              id="stats"
              className="hidden sm:flex absolute top-[510px]   z-40 w-[80%]    border border-slate-200 rounded-2xl overflow-hidden bg-white py-3 px-2 shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)]"
            >
              <div className="flex w-[40%]  items-center px-2 gap-2">
                <div className="   z-40   border border-slate-200  overflow-hidden  py-4 px-2 shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)] flex max-h-10 min-w-10 rounded-full  items-center justify-center bg-primary">
                  <FontAwesomeIcon
                    icon={faHome}
                    className=" text-primary-dark rounded-[100px]"
                  ></FontAwesomeIcon>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">12,458</p>
                  <p className="text-[12px] font-medium text-gray-500 leading-5">
                    Total Laporan
                  </p>
                </div>
              </div>
              <div className="flex w-[40%]  items-center px-2 gap-2">
                <div className="  bg-blue-100  z-40   border border-slate-200  overflow-hidden  py-4 px-2 shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)] flex max-h-10 min-w-10 rounded-full  items-center justify-center ">
                  <FontAwesomeIcon
                    icon={faFileCircleCheck}
                    className=" rounded-[100px] text-blue-500  "
                  ></FontAwesomeIcon>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">12,458</p>
                  <p className="text-[12px] font-medium text-gray-500 leading-5">
                    Laporan Selesai
                  </p>
                </div>
              </div>
              <div className="flex w-[40%]  items-center px-2 gap-2">
                <div className="   bg-amber-100 z-40   border border-slate-200  overflow-hidden  py-4 px-2 shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)] flex max-h-10 min-w-10 rounded-full  items-center justify-center">
                  <FontAwesomeIcon
                    icon={faClock}
                    className=" text-amber-400 rounded-[100px]"
                  ></FontAwesomeIcon>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">12,458</p>
                  <p className="text-[12px] font-medium text-gray-500 leading-5">
                    Rata-rata respon
                  </p>
                </div>
              </div>
              <div className="flex w-[40%]  items-center px-2 gap-2">
                <div className="   bg-purple-100 z-40   border border-slate-200  overflow-hidden  py-4 px-2 shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)] flex max-h-10 min-w-10 rounded-full  items-center justify-center">
                  <FontAwesomeIcon
                    icon={faUserGroup}
                    className=" text-purple-400 rounded-[100px]"
                  ></FontAwesomeIcon>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">12,458</p>
                  <p className="text-[12px] font-medium text-gray-500 leading-5">
                    Petugas Aktif
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="STATS_REPORT_SMALL"
            className="  sm:hidden flex items-center justify-center w-full"
          >
            <div className="  flex flex-col gap-2 items-center justify-center w-full  z-50">
              <div
                id="stats"
                className=" bg-white flex  justify-around   z-40   border border-slate-200 rounded-2xl overflow-hidden  py-3 px-2 shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)]"
              >
                <div className="flex   items-center px-2 gap-2">
                  <div className="   z-40   border border-slate-200  overflow-hidden  py-4 px-2 shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)] flex max-h-10 min-w-10 rounded-full  items-center justify-center bg-primary">
                    <FontAwesomeIcon
                      icon={faHome}
                      className=" text-primary-dark rounded-[100px]"
                    ></FontAwesomeIcon>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold">12,458</p>
                    <p className="text-[12px] font-medium text-gray-500 leading-5">
                      Total Laporan
                    </p>
                  </div>
                </div>
                <div className=" flex   items-center px-2 gap-2">
                  <div className="  bg-blue-100  z-40   border border-slate-200  overflow-hidden  py-4 px-2 shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)] flex max-h-10 min-w-10 rounded-full  items-center justify-center ">
                    <FontAwesomeIcon
                      icon={faFileCircleCheck}
                      className=" rounded-[100px] text-blue-500  "
                    ></FontAwesomeIcon>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold">12,458</p>
                    <p className="text-[12px] font-medium text-gray-500 leading-5">
                      Laporan Selesai
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="stats"
                className="flex md:hidden justify-around  z-40   border border-slate-200 rounded-2xl overflow-hidden bg-white py-3 px-2 shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)]"
              >
                <div className="flex  items-center px-2 gap-2 ">
                  <div className="   bg-amber-100 z-40   border border-slate-200  overflow-hidden  py-4 px-2 shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)] flex max-h-10 min-w-10 rounded-full  items-center justify-center">
                    <FontAwesomeIcon
                      icon={faClock}
                      className=" text-amber-400 rounded-[100px]"
                    ></FontAwesomeIcon>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold">12,458</p>
                    <p className="text-[12px] font-medium text-gray-500 leading-5">
                      Rata-rata respon
                    </p>
                  </div>
                </div>
                <div className="flex  items-center px-2 gap-2">
                  <div className="   bg-purple-100 z-40   border border-slate-200  overflow-hidden  py-4 px-2 shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)] flex max-h-10 min-w-10 rounded-full  items-center justify-center">
                    <FontAwesomeIcon
                      icon={faUserGroup}
                      className=" text-purple-400 rounded-[100px]"
                    ></FontAwesomeIcon>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold">12,458</p>
                    <p className="text-[12px] font-medium text-gray-500 leading-5">
                      Petugas Aktif
                    </p>
                  </div>
                </div>
              </div>
              {/* <div
                  id="stats"
                  className="flex md:hidden justify-around  z-40 w-[80%]  border border-slate-200 rounded-2xl overflow-hidden bg-white py-3 px-2 shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)]"
                >
                  <div className="flex  items-center px-2 gap-2">
                    <div className="   z-40   border border-slate-200  overflow-hidden  py-4 px-2 shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)] flex max-h-10 min-w-10 rounded-full  items-center justify-center bg-primary">
                      <FontAwesomeIcon
                        icon={faHome}
                        className=" text-primary-dark rounded-[100px] "
                      ></FontAwesomeIcon>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold">12,458</p>
                      <p className="text-[12px] font-medium text-gray-500 leading-5">
                        Total Laporan
                      </p>
                    </div>
                  </div>
                  <div className="flex  items-center px-2 gap-2">
                    <div className="   z-40   border border-slate-200  overflow-hidden  py-4 px-2 shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)] flex max-h-10 min-w-10 rounded-full  items-center justify-center bg-primary">
                      <FontAwesomeIcon
                        icon={faHome}
                        className=" text-primary-dark rounded-[100px]"
                      ></FontAwesomeIcon>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold">12,458</p>
                      <p className="text-[12px] font-medium text-gray-500 leading-5">
                        Total Laporan
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  id="stats"
                  className="md:hidden justify-around  z-40 w-[80%]  border border-slate-200 rounded-2xl overflow-hidden bg-white py-3 px-2 shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)]"
                >
                  <div className="flex justify-center items-center px-2 gap-2">
                    <div className="   z-40   border border-slate-200  overflow-hidden  py-4 px-2 shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)] flex max-h-10 min-w-10 rounded-full  items-center justify-center bg-primary">
                      <FontAwesomeIcon
                        icon={faHome}
                        className=" text-primary-dark rounded-[100px] "
                      ></FontAwesomeIcon>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold">12,458</p>
                      <p className="text-[12px] font-medium text-gray-500 leading-5">
                        Total Laporan
                      </p>
                    </div>
                  </div>

                </div> */}
            </div>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1781333090 absolute lg:top-[570px] top-[565px]  z-0 ">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
