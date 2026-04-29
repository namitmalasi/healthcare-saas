import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PatientCard from "../components/PatientCard";
import PatientTable from "../components/PatientTable";
import { patients } from "../data/patients";
import { usePatientStore } from "../store/patientStore";
import { useState } from "react";

const Patients = () => {
  const { viewMode, setViewMode } = usePatientStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1">
        <Navbar openSidebar={() => setIsSidebarOpen(true)} />

        <main className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Patients</h2>

            <div className="space-x-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  viewMode === "grid"
                    ? "bg-gray-900 text-white"
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
              >
                Grid
              </button>

              <button
                onClick={() => setViewMode("list")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  viewMode === "list"
                    ? "bg-gray-900 text-white"
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
              >
                List
              </button>
            </div>
          </div>

          {viewMode === "grid" ? (
            <div className="grid md:grid-cols-2 gap-4">
              {patients.map((patient) => (
                <PatientCard key={patient.id} patient={patient} />
              ))}
            </div>
          ) : (
            <PatientTable />
          )}
        </main>
      </div>
    </div>
  );
};

export default Patients;
