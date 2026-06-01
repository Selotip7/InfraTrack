import { Sidebar } from "@/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFileLines,
  faMap,
  faClock,
  
} from "@fortawesome/free-regular-svg-icons";
import { faChartLine, faBarsProgress,faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import { NavLink } from "react-router-dom";

const areaData = [
  { date: "May 1", value: 80 },
  { date: "May 5", value: 120 },
  { date: "May 10", value: 90 },
  { date: "May 15", value: 160 },
  { date: "May 20", value: 130 },
  { date: "May 25", value: 110 },
  { date: "May 30", value: 100 },
];

const severityData = [
  { name: "Critical", value: 248, color: "#E24B4A", pct: "19.9%" },
  { name: "High", value: 342, color: "#EF9F27", pct: "27.4%" },
  { name: "Medium", value: 428, color: "#378ADD", pct: "34.3%" },
  { name: "Low", value: 230, color: "#639922", pct: "18.4%" },
];

const recentReports = [
  {
    id: "#RPT-1248",
    location: "Jl. Sudirman No. 45",
    type: "Road Damage",
    severity: "Critical",
    status: "Pending",
    date: "20 May 2024",
  },
  {
    id: "#RPT-1247",
    location: "Jl. Pendidikan No. 12",
    type: "Sidewalk Damage",
    severity: "High",
    status: "In Progress",
    date: "20 May 2024",
  },
  {
    id: "#RPT-1246",
    location: "Jl. Merdeka No. 88",
    type: "Street Light",
    severity: "Medium",
    status: "Verified",
    date: "19 May 2024",
  },
  {
    id: "#RPT-1245",
    location: "Jl. Ahmad Yani No. 23r55555555555555555555",
    type: "Drainage",
    severity: "Low",
    status: "Completed",
    date: "19 May 2024",
  },
];

export default function Dashboard() {
  // const firstCard = " w-[150px] h-[100px] rounded-[10px] shadow-[0_0_3px_2px_rgba(0,0,0,0.1)]";

  // const th=
  const firstCard =
    "bg-white  rounded-xl border border-slate-200 p-4 ";
  return (
    <>
      <div className=" grid overflow-y-auto p-4 gap-3">
        <div className="FIRST_CARD    w-full grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className={`${firstCard}`}>
            <div className=" flex gap-3 justify-between md:">
              <div className="bg-blue-200 h-10 w-10 rounded-lg flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faFileLines}
                  className="text-blue-700"
                ></FontAwesomeIcon>
              </div>
              <div className="grid">
                <span className="mb-1.5 leading-[15px]">Total Reports</span>
                <span className="font-bold text-[25px] mb-2.5">1,248</span>
                <span className="text-[12px] ">12,5% from last month</span>
              </div>
            </div>
          </div>
          <div className={`${firstCard}`}>
            <div className=" flex gap-3 justify-between md:">
              <div className="bg-orange-300/30  h-10 w-10 rounded-lg flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-orange-400"
                ></FontAwesomeIcon>
              </div>
              <div className="grid">
                <span className="mb-1.5 leading-[15px]">Pending</span>
                <span className="font-bold text-[25px] mb-2.5">1,248</span>
                <span className="text-[12px] ">12,5% from last month</span>
              </div>
            </div>
          </div>
          <div className={`${firstCard}`}>
            <div className=" flex gap-3 justify-between md:">
              <div className="bg-blue-200 h-10 w-10 rounded-lg flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faBarsProgress}
                  className="text-blue-700"
                ></FontAwesomeIcon>
              </div>
              <div className="grid">
                <span className="mb-1.5 leading-[15px]">In Progress</span>
                <span className="font-bold text-[25px] mb-2.5">1,248</span>
                <span className="text-[12px] ">12,5% from last month</span>
              </div>
            </div>
          </div>
          <div className={`${firstCard}`}>
            <div className=" flex gap-3 justify-between md:">
              <div className="bg-green-200 h-10 w-10 rounded-lg flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-800"
                ></FontAwesomeIcon>
              </div>
              <div className="grid">
                <span className="mb-1.5 leading-[15px]">Completed</span>
                <span className="font-bold text-[25px] mb-2.5">1,248</span>
                <span className="text-[12px] ">12,5% from last month</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" SECOND_CARD    grid grid-cols-5 gap-3">
          <div className={`VISUALITATION  ${firstCard} col-span-3 `}>
            <div id="top-content" className="flex justify-between">
              <h3 className="font-semibold">Report Overview</h3>
              <select
                className={`border border-slate-200 rounded-[5px] py-1 px-2`}
              >
                <option>This Month</option>
              </select>
            </div>
            {/* <div id="bottom-content">
             
            </div> */}
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={areaData}>
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#378ADD" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#378ADD" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 11, fill: "#94a3b8" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "#94a3b8" }}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 200]}
                  ticks={[0, 50, 100, 150, 200]}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: 8,
                    border: "1px solid #e2e8f0",
                    fontSize: 12,
                  }}
                  labelStyle={{ color: "#475569" }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#378ADD"
                  strokeWidth={2}
                  fill="url(#grad)"
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className={`DONUTCHART   ${firstCard} col-span-2`}>
            <h3 className=" font-semibold mb-4">Reports by Severity</h3>
            <div className="flex items-center gap-4">
              <div className="relative">
                <PieChart width={130} height={130}>
                  <Pie
                    data={severityData}
                    cx={60}
                    cy={60}
                    innerRadius={42}
                    outerRadius={60}
                    dataKey="value"
                    strokeWidth={0}
                  >
                    {severityData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-lg font-bold text-slate-800">
                    1,248
                  </span>
                  <span className="text-xs text-slate-400">Total</span>
                </div>
              </div>
              <div className="flex-1 space-y-2">
                {severityData.map((s) => (
                  <div
                    key={s.name}
                    className="flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ background: s.color }}
                      ></span>
                      <span className="text-slate-600">{s.name}</span>
                    </div>
                    <span className="text-slate-500">
                      {s.value}{" "}
                      <span className="text-slate-400">({s.pct})</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* THIRD_CARD */}
        <div className="grid grid-cols-5 gap-3">
          <div className={`${firstCard} col-span-3 `}>
            <div id="top-content" className="flex justify-between">
              <h3 className="font-semibold">Recent Reports</h3>
              <NavLink className="text-blue-500 text-[12px]">View All</NavLink>
            </div>
            <div className="">
              <table className="table-fixed w-full text-left text-xs ">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Location</th>
                    <th>Severity</th>
                    <th>Status</th>
                    <th>Reported At</th>
                  </tr>
                </thead>
                <tbody>
                  {recentReports.map((data) => (
                    <tr>
                      <td>{data.id}</td>
                      <td className="wrap-break-word">{data.location}</td>
                      <td>{data.severity}</td>
                      <td>{data.status}</td>
                      <td>{data.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className={`${firstCard} col-span-2 `}>
            <div id="top-content" className="flex justify-between">
              <h3 className="font-semibold">Activity Feed</h3>
              <NavLink className="text-blue-500 text-[12px]">View All</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
