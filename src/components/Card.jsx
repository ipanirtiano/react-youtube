/* eslint-disable react/prop-types */
import moment from "moment";
import numeral from "numeral";
import { useEffect, useState } from "react";
import request from "../api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getVideoById, getChannelIcon } from "../actions";

const Card = ({ video }) => {
  const dispatch = useDispatch();

  const [channelIcon, setChannelIcon] = useState(null);
  const navigate = useNavigate();
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
    contentDetails: { duration },
    statistics: { viewCount },
  } = video;

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  useEffect(() => {
    const getDetailChannel = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.medium.url);
    };

    getDetailChannel();
  }, [channelId, dispatch]);

  const handleClickDetailVideos = () => {
    // dispatch detail video
    dispatch(getVideoById(id));
    // dispatch channel icon
    dispatch(getChannelIcon(channelIcon));
    navigate(`/watch/${id}`);
  };

  return (
    <>
      <div
        className="w-full sm:w-[260px] md:max-w-[290px] lg:max-w-[320px] cursor-pointer"
        onClick={handleClickDetailVideos}
      >
        <div className="w-full relative">
          <img
            src={medium.url}
            alt=""
            className="w-full h-full object-fill rounded-lg"
          />
          <div className="absolute bottom-2 right-3 bg-black/90 px-[8px] py-[2px] text-sm rounded-md text-white">
            {_duration}
          </div>
        </div>

        <div className="flex py-4 px-2 gap-3">
          <img src={channelIcon} alt="" className="w-10 h-10 rounded-full" />

          <div>
            <div className="text-base line-clamp-2 mb-2">{title}</div>
            <p className="text-base text-gray-900">{channelTitle}</p>
            <span className="after:content-['•'] after:mx-1 text-sm text-gray-900">
              {numeral(viewCount).format("0.a")} views
            </span>
            <span className="text-sm text-gray-900">
              {moment(publishedAt).fromNow()}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
