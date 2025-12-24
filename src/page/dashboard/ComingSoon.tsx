const ComingSoon = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-black text-white px-6">
      <div className="max-w-xl w-full text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold">Coming Soon 🚀</h1>

        <p className="text-slate-400 text-lg">
          We’re building something powerful to make your experience better. Stay
          tuned.
        </p>

        <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full" />
      </div>
    </div>
  );
};

export default ComingSoon;
