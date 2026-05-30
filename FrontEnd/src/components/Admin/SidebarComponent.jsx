import logo from '../../assets/logo.png'

export default function Sidebar(){
  return (
    <>
      <div className="flex flex-col w-56 h-screen bg-primary text-black ">
        <div
          id="brand"
          className="relative flex h-16 items-center gap-3 px-3 after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-[90%] after:-translate-x-1/2 after:bg-amber-950"
        >
          <div id="logo" className="w-1/4 ">
            <img src={logo} className="rounded-[5px]" />
          </div>
          <div id="brand-text" className=" flex flex-col gap-0 m-0">
            <p className="font-medium leading-5 text-[20px]">InfraTrack</p>
            <p className="text-[12px]">Monitoring System</p>
          </div>
        </div>
      </div>
    </>
  );
}