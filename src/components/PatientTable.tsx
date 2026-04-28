import { patients } from "../data/patients";

const PatientTable = () => {
  return (
    <div className="bg-white rounded-2xl border overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="text-left p-4">Name</th>
            <th className="text-left p-4">Age</th>
            <th className="text-left p-4">Condition</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id} className="border-t">
              <td className="p-4">{patient.name}</td>
              <td className="p-4">{patient.age}</td>
              <td className="p-4">{patient.disease}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;