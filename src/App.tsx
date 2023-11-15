import useCount from "./hooks/useCount";

const App = () => {
  const count = useCount((state) => state.count);
  const plusCount = useCount((state) => state.increaseCount);
  const minusCount = useCount((state) => state.decreaseCount);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center gap-5">
        <p className="font-semibold text-3xl">{count}</p>
        <div className="flex gap-5">
          <button
            onClick={plusCount}
            className="px-2 bg-blue-400 text-white text-3xl font-semibold rounded-lg"
          >
            +
          </button>
          <button
            onClick={minusCount}
            className="px-2 bg-red-400 text-white text-3xl font-semibold rounded-lg"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
