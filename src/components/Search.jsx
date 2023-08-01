/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { getVideoById, getChannelIcon } from "../actions";
import { useEffect, useState } from "react";
import request from "../api";
import { useNavigate } from "react-router-dom";
import numeral from "numeral";
import moment from "moment";

const Search = ({ data }) => {
  const [channelIcon, setChannelIcon] = useState(null);
  const { videoDetails } = useSelector((state) => state.youtube);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getDetailChannel = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: data.snippet.channelId,
        },
      });

      setChannelIcon(items[0].snippet.thumbnails.medium.url);
    };

    // dispatch detail video
    dispatch(getVideoById(data.id.videoId));
    // dispatch channel detail
    dispatch(getChannelIcon(channelIcon));
    getDetailChannel();
  }, [data, channelIcon, dispatch]);

  const handleClickDetailVideos = () => {
    // dispatch detail video
    dispatch(getVideoById(data.id.videoId));
    // dispatch channel icon
    dispatch(getChannelIcon(channelIcon));
    navigate(`/watch/${data.id.videoId}`);
  };

  return (
    <div
      className="px-4 flex justify-center mt-5 cursor-pointer"
      onClick={handleClickDetailVideos}
    >
      <div className="w-full sm:w-[500px] md:w-[800px] flex space-x-4 border-b border-gray-400 pb-5">
        <div className="w-[190px] h-[100px] sm:w-[180px] md:w-[350px] md:h-[170px] bg-slate-300">
          <img
            src={data.snippet.thumbnails.medium.url}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[200px] sm:w-[300px] md:w-[600px]">
          <p className="sm:text-xl md:text-2xl line-clamp-1 md:line-clamp-2 text-sm">
            {data.snippet.title}
          </p>
          <div className="flex space-x-3 mb-2">
            <p className="text-xs md:text-sm font-thin">
              {" "}
              {videoDetails
                ? numeral(videoDetails.statistics.viewCount).format("0.a")
                : ""}
            </p>
            <p className="text-xs md:text-sm font-thin">
              {data ? moment(data.snippet.publishedAt).fromNow() : ""}
            </p>
          </div>
          <div className="flex items-center space-x-2 mb-2 md:mb-5">
            <img
              src={channelIcon}
              alt=""
              className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-slate-300"
            />

            <p className="text-sm">{data.snippet.channelTitle}</p>
          </div>
          <p className="line-clamp-1 md:line-clamp-2 font-light text-sm">
            {data.snippet.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Search;
