const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
        <h2 className="text-2xl font-semibold text-gray-700">Loading...</h2>
        <p className="text-gray-500">Please wait a moment</p>
      </div>
    </div>
  );
};

export default Loading;
