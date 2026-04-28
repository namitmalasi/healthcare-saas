import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
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
  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-6 space-y-6">
          <h2 className="text-2xl font-bold">Analytics</h2>

          {/* Line Chart */}
          <div className="bg-white p-6 rounded-2xl border">
            <h3 className="mb-4 font-semibold">Weekly Patients</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="patients" stroke="#2563EB" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-white p-6 rounded-2xl border">
            <h3 className="mb-4 font-semibold">Daily Visits</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="patients" fill="#14B8A6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;