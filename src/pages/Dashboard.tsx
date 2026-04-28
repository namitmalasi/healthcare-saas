import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import { useState } from "react";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1">
        <Navbar openSidebar={() => setIsSidebarOpen(true)} />

        <main className="p-6">
          <div className="grid md:grid-cols-4 gap-5">
            <StatCard title="Total Patients" value="1,248" />
            <StatCard title="Appointments" value="86" />
            <StatCard title="Revenue" value="$12,430" />
            <StatCard title="Recovered Cases" value="94%" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
