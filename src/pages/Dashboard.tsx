import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

const Dashboard = () => {
  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-6">
          <div className="grid md:grid-cols-4 gap-5">
            <StatCard title="Total Patients" value="1,248" />
            <StatCard title="Appointments" value="86" />
            <StatCard title="Revenue" value="$12,430" />
            <StatCard title="Recovered Cases" value="94%" />
          </div>

          <div className="mt-8 bg-white p-6 rounded-2xl border">
            <h3 className="text-xl font-semibold mb-3">Overview</h3>
            <p className="text-slate-500">
              Welcome to your healthcare management dashboard.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;