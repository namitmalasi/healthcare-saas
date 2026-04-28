type Props = {
  title: string;
  value: string;
};

const StatCard = ({ title, value }: Props) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-sm transition">
      <p className="text-gray-600 text-sm font-medium">{title}</p>
      <h3 className="text-2xl font-bold mt-3 text-gray-900">{value}</h3>
    </div>
  );
};

export default StatCard;
