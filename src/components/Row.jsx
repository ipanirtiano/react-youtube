/* eslint-disable no-unused-vars */
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getHomeVideos } from "../actions";
import Spinner from "./Spinner";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Row = () => {
  const { videos } = useSelector((state) => state.youtube);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeVideos());
  }, [dispatch, videos]);

  return (
    <InfiniteScroll
      dataLength={videos.length}
      next=""
      hasMore={true}
      loader={<Spinner />}
    >
      <div className="flex justify-center gap-4 flex-wrap mt-[80px] px-4">
        {videos.map((video, i) => {
          return <Card key={i} video={video} />;
        })}
      </div>
    </InfiniteScroll>
  );
};

export default Row;
