type Props = {
  patient: {
    name: string;
    age: number;
    disease: string;
  };
};

const PatientCard = ({ patient }: Props) => {
  return (
    <div className="bg-white p-5 rounded-2xl border shadow-sm">
      <h3 className="text-xl font-semibold">{patient.name}</h3>
      <p className="text-slate-500 mt-2">Age: {patient.age}</p>
      <p className="text-slate-500">Condition: {patient.disease}</p>
    </div>
  );
};

export default PatientCard;