import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const data = [
  { name: "Mon", patients: 30 },
  { name: "Tue", patients: 45 },
  { name: "Wed", patients: 28 },
  { name: "Thu", patients: 50 },
  { name: "Fri", patients: 60 },
  { name: "Sat", patients: 40 },
  { name: "Sun", patients: 35 },
];

const Analytics = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1">
        <Navbar openSidebar={() => setIsSidebarOpen(true)} />

        <main className="p-6 space-y-6">
          <h2 className="text-xl font-bold text-gray-900">Analytics</h2>

          {/* Line Chart */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="mb-4 font-semibold text-gray-900 text-sm">
              Weekly Patients
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <XAxis
                  dataKey="name"
                  stroke="#9ca3af"
                  style={{ fontSize: "12px" }}
                />
                <YAxis stroke="#9ca3af" style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#f9fafb",
                    border: "1px solid #e5e7eb",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="patients"
                  stroke="#1f2937"
                  strokeWidth={2}
                  dot={{ fill: "#1f2937", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="mb-4 font-semibold text-gray-900 text-sm">
              Daily Visits
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis
                  dataKey="name"
                  stroke="#9ca3af"
                  style={{ fontSize: "12px" }}
                />
                <YAxis stroke="#9ca3af" style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#f9fafb",
                    border: "1px solid #e5e7eb",
                  }}
                />
                <Bar dataKey="patients" fill="#6b7280" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;
