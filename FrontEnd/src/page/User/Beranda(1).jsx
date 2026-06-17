import { NavLink } from "react-router-dom";
import background from "../../assets/Background.png";
import { faUpload, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Beranda() {
  // const [screenSize,setScreenSize]=useState(window.innerWidth)
  const firstCard =
    "flex flex-col bg-white  rounded-xl border border-slate-200 p-4  items-center ";
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
        className="relative flex flex-col mt-[40px]  w-full  h-[550px]   bg-no-repeat  bg-cover bg-center pt-5 "
        // style={{
        //   backgroundImage: `url(${background})`,
        //   // backgroundSize: cive,
        // }}
      >
        <img src={background} className="w-[2000px] h-full "></img>
        <div className="px-10 md:px-10 ">
          <div className="flex flex-col gap-[40px] absolute top-0  ">
            <p className="py-1 px-2 bg-primary max-w-[280px] text-center text-[13px] font-medium rounded-2xl">
              Sistem Laporan Infrastruktur Berbasis AI
            </p>
            <div className="text-[48px] max-w-[400px] leading-10   ">
              <h1 className="font-semibold!">
                Laporkan Kerusakan, bangun Insfrastruktur Yang Lebih Baik
              </h1>
            </div>
            <p className=" max-w-[400px] md:max-w-[600px] text-justify font-medium text-gray-800 md:text-[16px]">
              InfraTrack memudahkan masyarakat untuk melaporkan kerusakan
              infrastruktur di sekitar dengan cepat. Laporan anda akan membantu
              pemerintah dan pihak terkait untuk merespon lebih cepat dan tepat
            </p>
            <div className="flex">
              <NavLink
                to="/"
                className="bg-primary-dark p-2.5 py-3.5 rounded-xl mr-3"
              >
                <FontAwesomeIcon icon={faUpload} className="mr-2" />
                Buat Laporan
              </NavLink>
              <NavLink
                to="/"
                className=" p-2.5 py-3.5 rounded-xl border border-slate-400 bg-gray-100"
              >
                Lihat Peta Kerusakan
              </NavLink>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <div
              id="stats"
              className="hidden md:flex absolute top-[520px]   z-40 w-[80%]    border border-slate-200 rounded-2xl overflow-hidden bg-white py-3 px-2 shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)]"
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
              id="stat-card"
              className="md:hidden grid grid-cols-2 gap-3 absolute top-[520px] left-0 right-0 z-50 w-full px-4 "
            >
              <div className={`${firstCard} `}>
                <div className="  z-40  flex  w-[50%]  py-4  border border-slate-200  overflow-hidden   shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)]  rounded-full  items-center justify-center bg-primary">
                  <FontAwesomeIcon
                    icon={faHome}
                    className=" text-primary-dark rounded-[100px]"
                  ></FontAwesomeIcon>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-bold">12,458</p>
                  <p>Total Laporan</p>
                </div>
              </div>
              <div className={`${firstCard}`}>
                <div className="  z-40  flex  w-[50%]  py-4  border border-slate-200  overflow-hidden   shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)]  rounded-full  items-center justify-center bg-primary">
                  <FontAwesomeIcon
                    icon={faHome}
                    className=" text-primary-dark rounded-[100px]"
                  ></FontAwesomeIcon>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-bold">12,458</p>
                  <p>Total Laporan</p>
                </div>
              </div>
              <div className={`${firstCard}`}>
                <div className="  z-40  flex  w-[50%]  py-4  border border-slate-200  overflow-hidden   shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)]  rounded-full  items-center justify-center bg-primary">
                  <FontAwesomeIcon
                    icon={faHome}
                    className=" text-primary-dark rounded-[100px]"
                  ></FontAwesomeIcon>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-bold">12,458</p>
                  <p>Total Laporan</p>
                </div>
              </div>
              <div className={`${firstCard}`}>
                <div className="  z-40  flex  w-[50%]  py-4  border border-slate-200  overflow-hidden   shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)]  rounded-full  items-center justify-center bg-primary">
                  <FontAwesomeIcon
                    icon={faHome}
                    className=" text-primary-dark rounded-[100px]"
                  ></FontAwesomeIcon>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-bold">12,458</p>
                  <p>Total Laporan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1781333090 absolute top-[495px] h-[60px] ">
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
