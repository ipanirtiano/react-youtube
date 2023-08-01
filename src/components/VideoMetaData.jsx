/* eslint-disable react/prop-types */
import { BsBell } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import numeral from "numeral";
import { useSelector } from "react-redux";

const VideoMetaData = ({ data }) => {
  const { channelIcon } = useSelector((state) => state.youtube);

  return (
    <div className="flex flex-col space-y-4">
      <div className="w-full md:text-xl line-clamp-2 text-base mt-4">
        {data ? data.snippet.title : ""}
      </div>

      <div className="flex flex-wrap justify-between space-y-3">
        <div className="flex items-center justify-between w-full md:w-[300px]">
          <div className="flex space-x-3 mt-3 cursor-pointer">
            <img
              src={channelIcon}
              alt="logo"
              className="bg-slate-100 w-12 h-12 rounded-full"
            />
            <div className="flex flex-col justify-center cursor-pointer">
              <p className="text-sm md:text-base w-full">
                {data ? data.snippet.channelTitle : ""}
              </p>
              <p className="text-gray-300 font-light text-sm md:text-base">
                Subscirber
              </p>
            </div>
          </div>
        </div>

        <div className="flex space-x-5 items-center">
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="flex items-center space-x-2 bg-[#1f1f1f] py-2 px-3 rounded-md cursor-pointer">
              <BsBell />
              <p className="text-sm md:text-base">Subsribed</p>
            </div>
            <span className="material-symbols-outlined font-light text-sm md:text-base">
              thumb_up
            </span>
            <p className="font-light text-sm md:text-base">
              {data ? numeral(data.statistics.viewCount).format("0.a") : ""}
            </p>
            <span>|</span>
            <span className="material-symbols-outlined font-light text-sm md:text-base">
              thumb_down
            </span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer text-sm md:text-base">
            <FaShare />
            <p className="font-light text-sm md:text-base">Share</p>
          </div>
          <div className="md:flex items-center cursor-pointer hidden">
            <span className="material-symbols-outlined font-light text-sm md:text-base">
              more_vert
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoMetaData;
