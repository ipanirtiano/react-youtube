/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { getVideoById, getChannelIcon } from "../actions";
import { useEffect, useState } from "react";
import request from "../api";
import { useNavigate } from "react-router-dom";
import numeral from "numeral";
import moment from "moment";

const VideoHorizontal = ({ data }) => {
  const [channelIcon, setChannelIcon] = useState(null);
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

    getDetailChannel();
    // dispatch data detail video
  }, [data.snippet.channelId, dispatch]);

  const handleClickDetailVideos = () => {
    // dispatch detail video
    dispatch(getVideoById(data.id.videoId));
    dispatch(getChannelIcon(channelIcon));
    navigate(`/watch/${data.id.videoId}`);
  };

  return (
    <div className="py-2 px-4" onClick={handleClickDetailVideos}>
      <div className="flex w-full gap-2 cursor-pointer">
        <div className="w-full">
          <img
            src={data.snippet.thumbnails.medium.url}
            alt="logo"
            className="w-full"
          />
        </div>

        <div className="flex flex-col w-full">
          <p className="line-clamp-2 text-sm">{data.snippet.title}</p>
          <p className="font-light text-gray-300 text-sm">
            {data.snippet.channelTitle}
          </p>
          <div className="flex flex-wrap space-x-2">
            <p className="font-light text-gray-300">Views</p>
            <p className="font-light text-gray-300"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoHorizontal;
