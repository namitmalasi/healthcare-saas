type Props = {
  title: string;
  value: string;
};

const StatCard = ({ title, value }: Props) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border">
      <p className="text-slate-500">{title}</p>
      <h3 className="text-3xl font-bold mt-2">{value}</h3>
    </div>
  );
};

export default StatCard;