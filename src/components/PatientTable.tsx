import { patients } from "../data/patients";

const PatientTable = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="text-left p-4 text-sm font-semibold text-gray-900">
              Name
            </th>
            <th className="text-left p-4 text-sm font-semibold text-gray-900">
              Age
            </th>
            <th className="text-left p-4 text-sm font-semibold text-gray-900">
              Condition
            </th>
          </tr>
        </thead>

        <tbody>
          {patients.map((patient) => (
            <tr
              key={patient.id}
              className="border-t border-gray-100 hover:bg-gray-50 transition"
            >
              <td className="p-4 text-gray-900 text-sm">{patient.name}</td>
              <td className="p-4 text-gray-600 text-sm">{patient.age}</td>
              <td className="p-4 text-gray-600 text-sm">{patient.disease}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;
