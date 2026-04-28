type Props = {
  patient: {
    name: string;
    age: number;
    disease: string;
  };
};

const PatientCard = ({ patient }: Props) => {
  return (
    <div className="bg-white p-5 rounded-lg border border-gray-200 hover:shadow-sm transition">
      <h3 className="text-lg font-semibold text-gray-900">{patient.name}</h3>
      <p className="text-gray-600 text-sm mt-2">Age: {patient.age}</p>
      <p className="text-gray-600 text-sm">Condition: {patient.disease}</p>
    </div>
  );
};

export default PatientCard;
