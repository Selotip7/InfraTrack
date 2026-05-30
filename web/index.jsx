import { useState } from "react";
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
    location: "Jl. Ahmad Yani No. 23",
    type: "Drainage",
    severity: "Low",
    status: "Completed",
    date: "19 May 2024",
  },
];

const activityFeed = [
  {
    icon: "📄",
    title: "New report submitted",
    sub: "Jl. Sudirman No. 45",
    time: "2 minutes ago",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: "🔄",
    title: "Report updated to In Progress",
    sub: "Jl. Pendidikan No. 12",
    time: "15 minutes ago",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: "✅",
    title: "Report marked as Completed",
    sub: "Jl. Merdeka No. 88",
    time: "1 hour ago",
    color: "bg-green-100 text-green-600",
  },
];

const navItems = [
  { icon: "🏠", label: "Dashboard", active: true },
  { icon: "📋", label: "Reports" },
  { icon: "🗺️", label: "Map Monitoring" },
  { icon: "📊", label: "Analytics" },
  { icon: "✅", label: "Tasks" },
  { icon: "👥", label: "Users" },
  { icon: "🔔", label: "Notifications" },
  { icon: "⚙️", label: "Settings" },
];

const severityBadge = {
  Critical: "bg-red-100 text-red-600 border border-red-200",
  High: "bg-orange-100 text-orange-600 border border-orange-200",
  Medium: "bg-blue-100 text-blue-600 border border-blue-200",
  Low: "bg-green-100 text-green-600 border border-green-200",
};

const statusBadge = {
  Pending: "bg-red-100 text-red-600",
  "In Progress": "bg-blue-100 text-blue-600",
  Verified: "bg-purple-100 text-purple-600",
  Completed: "bg-green-100 text-green-600",
};

const statusDot = {
  Pending: "bg-red-500",
  "In Progress": "bg-blue-500",
  Verified: "bg-purple-500",
  Completed: "bg-green-500",
};

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-56 bg-slate-800 flex flex-col shrink-0">
        <div className="flex items-center gap-3 px-5 py-5 border-b border-slate-700">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
            IT
          </div>
          <div>
            <p className="text-white text-sm font-semibold leading-tight">InfraTrack</p>
            <p className="text-slate-400 text-xs">Monitoring System</p>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map(({ icon, label }) => (
            <button
              key={label}
              onClick={() => setActiveNav(label)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors text-left ${
                activeNav === label
                  ? "bg-blue-600 text-white font-medium"
                  : "text-slate-400 hover:text-white hover:bg-slate-700"
              }`}
            >
              <span className="text-base">{icon}</span>
              {label}
            </button>
          ))}
        </nav>

        <div className="px-4 py-4 border-t border-slate-700 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
            AU
          </div>
          <div>
            <p className="text-white text-xs font-medium">Admin User</p>
            <p className="text-slate-400 text-xs">Administrator</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shrink-0">
          <div>
            <h1 className="text-lg font-semibold text-slate-800">Dashboard</h1>
            <p className="text-sm text-slate-500">Welcome back, Admin! Here's what's happening today.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-slate-500 hover:text-slate-700">
              <span className="text-xl">🔔</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600">
              <span>📅</span>
              <span>May 20, 2024</span>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Stat Cards */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "Total Reports", value: "1,248", change: "↑ 12.5%", icon: "📋", color: "text-blue-500", bg: "bg-blue-50" },
              { label: "Pending", value: "215", change: "↑ 8.3%", icon: "⏳", color: "text-orange-500", bg: "bg-orange-50" },
              { label: "In Progress", value: "342", change: "↑ 15.2%", icon: "🔄", color: "text-sky-500", bg: "bg-sky-50" },
              { label: "Completed", value: "691", change: "↑ 18.8%", icon: "✅", color: "text-green-500", bg: "bg-green-50" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="flex items-start justify-between">
                  <p className="text-sm text-slate-500">{s.label}</p>
                  <div className={`w-9 h-9 ${s.bg} rounded-lg flex items-center justify-center text-lg`}>
                    {s.icon}
                  </div>
                </div>
                <p className="text-2xl font-bold text-slate-800 mt-2">{s.value}</p>
                <p className="text-xs text-green-600 mt-1">{s.change} <span className="text-slate-400">from last month</span></p>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-5 gap-4">
            {/* Area Chart */}
            <div className="col-span-3 bg-white rounded-xl border border-slate-200 p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold text-slate-700">Reports Overview</h2>
                <select className="text-xs border border-slate-200 rounded-lg px-2 py-1 text-slate-600 bg-white">
                  <option>This Month</option>
                  <option>Last Month</option>
                </select>
              </div>
              <ResponsiveContainer width="100%" height={180}>
                <AreaChart data={areaData}>
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#378ADD" stopOpacity={0.15} />
                      <stop offset="95%" stopColor="#378ADD" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} domain={[0, 200]} ticks={[0,50,100,150,200]} />
                  <Tooltip
                    contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }}
                    labelStyle={{ color: "#475569" }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#378ADD" strokeWidth={2} fill="url(#grad)" dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Donut Chart */}
            <div className="col-span-2 bg-white rounded-xl border border-slate-200 p-5">
              <h2 className="text-sm font-semibold text-slate-700 mb-4">Reports by Severity</h2>
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
                    <span className="text-lg font-bold text-slate-800">1,248</span>
                    <span className="text-xs text-slate-400">Total</span>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  {severityData.map((s) => (
                    <div key={s.name} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: s.color }}></span>
                        <span className="text-slate-600">{s.name}</span>
                      </div>
                      <span className="text-slate-500">{s.value} <span className="text-slate-400">({s.pct})</span></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-5 gap-4">
            {/* Recent Reports */}
            <div className="col-span-3 bg-white rounded-xl border border-slate-200 p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold text-slate-700">Recent Reports</h2>
                <button className="text-xs text-blue-600 hover:underline">View All</button>
              </div>
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-slate-100">
                    {["ID", "Location", "Type", "Severity", "Status", "Reported At"].map((h) => (
                      <th key={h} className="pb-2 text-left text-slate-400 font-medium pr-3">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {recentReports.map((r, i) => (
                    <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                      <td className="py-2.5 pr-3 text-blue-600 font-medium">{r.id}</td>
                      <td className="py-2.5 pr-3 text-slate-600 max-w-[120px] truncate">{r.location}</td>
                      <td className="py-2.5 pr-3 text-slate-600">{r.type}</td>
                      <td className="py-2.5 pr-3">
                        <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${severityBadge[r.severity]}`}>
                          {r.severity}
                        </span>
                      </td>
                      <td className="py-2.5 pr-3">
                        <div className="flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${statusDot[r.status]}`}></span>
                          <span className="text-slate-600">{r.status}</span>
                        </div>
                      </td>
                      <td className="py-2.5 text-slate-400">{r.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Activity Feed */}
            <div className="col-span-2 bg-white rounded-xl border border-slate-200 p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold text-slate-700">Activity Feed</h2>
                <button className="text-xs text-blue-600 hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                {activityFeed.map((a, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0 ${a.color}`}>
                      {a.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-slate-700 leading-tight">{a.title}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{a.sub}</p>
                    </div>
                    <span className="text-xs text-slate-400 shrink-0">{a.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}