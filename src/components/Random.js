import useGif from "../hooks/useGifs";
import Spinner from "./Spinner";

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-1/2 bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-3xl uppercase mt-[15px] underline font-bold">
        A Random Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}
      <button
        onClick={() => fetchData()}
        className="w-10/12 bg-white mb-[20px] text-xl py-2 rounded-lg font-bold"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
