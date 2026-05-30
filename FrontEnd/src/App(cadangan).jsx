import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

export default function InfrastructureReportingUI() {
  const reports = [
    {
      id: "RPT-1021",
      title: "Pothole Near School Area",
      severity: "Critical",
      status: "On Progress",
      location: "Jl. Malioboro, Yogyakarta",
    },
    {
      id: "RPT-1022",
      title: "Damaged Guiding Block",
      severity: "Medium",
      status: "Pending",
      location: "Tugu Station Area",
    },
    {
      id: "RPT-1023",
      title: "Road Crack Detection",
      severity: "Low",
      status: "Completed",
      location: "Ring Road Selatan",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      {/* Sidebar */}
      <div className="flex">
        <aside className="w-72 bg-zinc-900 text-white min-h-screen p-6 flex flex-col gap-6 shadow-2xl">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">InfraSight</h1>
            <p className="text-sm text-zinc-400 mt-1">
              Infrastructure Monitoring System
            </p>
          </div>

          <nav className="flex flex-col gap-3 text-sm">
            <button className="bg-white text-zinc-900 rounded-xl px-4 py-3 font-medium text-left">
              Dashboard
            </button>
            <button className="hover:bg-zinc-800 rounded-xl px-4 py-3 text-left transition">
              Reports
            </button>
            <button className="hover:bg-zinc-800 rounded-xl px-4 py-3 text-left transition">
              AI Detection
            </button>
            <button className="hover:bg-zinc-800 rounded-xl px-4 py-3 text-left transition">
              Map Monitoring
            </button>
            <button className="hover:bg-zinc-800 rounded-xl px-4 py-3 text-left transition">
              Analytics
            </button>
            <button className="hover:bg-zinc-800 rounded-xl px-4 py-3 text-left transition">
              Settings
            </button>
          </nav>

          <div className="mt-auto bg-zinc-800 rounded-2xl p-4">
            <p className="text-sm text-zinc-400">System Status</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="text-sm">AI Detection Active</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Topbar */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">Infrastructure Dashboard</h2>
              <p className="text-zinc-500 mt-1">
                Real-time monitoring and AI-based damage analysis
              </p>
            </div>

            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Search reports..."
                className="px-4 py-3 rounded-xl border border-zinc-300 bg-white w-72 outline-none"
              />

              <button className="bg-zinc-900 text-white px-5 py-3 rounded-xl shadow-lg hover:scale-105 transition">
                + New Report
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-200">
              <p className="text-zinc-500 text-sm">Total Reports</p>
              <h3 className="text-4xl font-bold mt-2">1,284</h3>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-200">
              <p className="text-zinc-500 text-sm">Critical Issues</p>
              <h3 className="text-4xl font-bold mt-2">84</h3>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-200">
              <p className="text-zinc-500 text-sm">Resolved</p>
              <h3 className="text-4xl font-bold mt-2">1,009</h3>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-200">
              <p className="text-zinc-500 text-sm">AI Accuracy</p>
              <h3 className="text-4xl font-bold mt-2">94%</h3>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-3 gap-6">
            {/* Report Table */}
            <div className="col-span-2 bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Recent Reports</h3>
                <button className="text-sm text-zinc-500 hover:text-black transition">
                  View All
                </button>
              </div>

              <div className="overflow-hidden rounded-2xl border border-zinc-200">
                <table className="w-full text-sm">
                  <thead className="bg-zinc-100 text-zinc-600">
                    <tr>
                      <th className="text-left p-4">Report ID</th>
                      <th className="text-left p-4">Issue</th>
                      <th className="text-left p-4">Severity</th>
                      <th className="text-left p-4">Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {reports.map((report) => (
                      <tr
                        key={report.id}
                        className="border-t border-zinc-200 hover:bg-zinc-50 transition"
                      >
                        <td className="p-4 font-medium">{report.id}</td>
                        <td className="p-4">
                          <div>
                            <p className="font-medium">{report.title}</p>
                            <p className="text-zinc-500 text-xs mt-1">
                              {report.location}
                            </p>
                          </div>
                        </td>

                        <td className="p-4">
                          <span className="px-3 py-1 rounded-full bg-zinc-100 text-xs font-medium">
                            {report.severity}
                          </span>
                        </td>

                        <td className="p-4">
                          <span className="px-3 py-1 rounded-full bg-zinc-900 text-white text-xs font-medium">
                            {report.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Panel */}
            <div className="flex flex-col gap-6">
              {/* AI Preview */}
              <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">AI Detection</h3>
                  <span className="text-xs bg-green-100 px-3 py-1 rounded-full">
                    Live
                  </span>
                </div>

                <div className="rounded-2xl overflow-hidden mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
                    alt="Road Damage"
                    className="w-full h-52 object-cover"
                  />
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Detection Type</span>
                    <span className="font-medium">Pothole</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-zinc-500">Confidence</span>
                    <span className="font-medium">91%</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-zinc-500">Severity</span>
                    <span className="font-medium">Critical</span>
                  </div>
                </div>
              </div>

              {/* Activity */}
              <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>

                <div className="space-y-4 text-sm">
                  <div className="border-l-2 border-zinc-900 pl-4">
                    <p className="font-medium">New damage report submitted</p>
                    <p className="text-zinc-500 text-xs mt-1">5 minutes ago</p>
                  </div>

                  <div className="border-l-2 border-zinc-400 pl-4">
                    <p className="font-medium">AI segmentation completed</p>
                    <p className="text-zinc-500 text-xs mt-1">18 minutes ago</p>
                  </div>

                  <div className="border-l-2 border-zinc-300 pl-4">
                    <p className="font-medium">Officer updated report status</p>
                    <p className="text-zinc-500 text-xs mt-1">32 minutes ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
