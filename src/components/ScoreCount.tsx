const ScoreCount = ({ count, name }: { count: number; name: string }) => {
  return (
    <div className="flex-1 flex flex-col items-center">
      <span className="text-2xl font-semibold text-[#9013fe]">{count}</span>
      <p className="text-black font-medium text-md">{name}</p>
    </div>
  );
};

export default ScoreCount;
