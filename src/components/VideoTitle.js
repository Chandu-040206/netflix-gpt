import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="text-white">
      
      <div className="max-w-xl">
        
        <h1 className="text-5xl font-bold">
          {title}
        </h1>

        <p className="mt-4 text-gray-200 leading-relaxed line-clamp-3">
          {overview}
        </p>

        <div className="flex gap-4 mt-6">
          
          <button className="
            flex items-center gap-2
            bg-white text-black
            px-6 py-2.5
            rounded-md font-semibold
            hover:bg-gray-200
          ">
            <FaPlay />
            Play
          </button>

          <button className="
            flex items-center gap-2
            bg-gray-500/70 text-white
            px-6 py-2.5
            rounded-md font-semibold
            hover:bg-gray-500/50
          ">
            <AiOutlineInfoCircle />
            More Info
          </button>

        </div>

      </div>
    </div>
  );
};

export default VideoTitle;
