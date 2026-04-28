import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PatientCard from "../components/PatientCard";
import PatientTable from "../components/PatientTable";
import { patients } from "../data/patients";
import { usePatientStore } from "../store/patientStore";

const Patients = () => {
  const { viewMode, setViewMode } = usePatientStore();

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Patients</h2>

            <div className="space-x-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-4 py-2 rounded-xl ${
                  viewMode === "grid"
                    ? "bg-blue-600 text-white"
                    : "bg-white border"
                }`}
              >
                Grid
              </button>

              <button
                onClick={() => setViewMode("list")}
                className={`px-4 py-2 rounded-xl ${
                  viewMode === "list"
                    ? "bg-blue-600 text-white"
                    : "bg-white border"
                }`}
              >
                List
              </button>
            </div>
          </div>

          {viewMode === "grid" ? (
            <div className="grid md:grid-cols-2 gap-5">
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