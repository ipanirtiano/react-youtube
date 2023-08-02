/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import Comments from "./Comments";
import Descriptions from "./Descriptions";
import Navbar from "./Navbar";
import VideoHorizontal from "./VideoHorizontal";
import VideoMetaData from "./VideoMetaData";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRelatedVideo } from "../actions";

const Watch = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { videoDetails, relatedVideo } = useSelector((state) => state.youtube);
  useEffect(() => {
    window.scrollTo(0, 0);
    // dispatch related video
    dispatch(getRelatedVideo(id));
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="flex gap-4 mt-[70px] md:px-4 px-[4px] flex-wrap">
        <div className="w-full md:max-w-[800px] px-3">
          <div className=" w-full h-[30vh] sm:h-[70vh]">
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              frameBorder="0"
              title="My Video"
              allowFullScreen
              width="100%"
              height="100%"
            ></iframe>
          </div>

          <VideoMetaData data={videoDetails} />
          <Descriptions data={videoDetails} />
          <Comments />
        </div>

        <div className="">
          <p className="px-4 pb-4">Related Videos</p>
          <div className="w-full lg:max-w-[400px] h-screen overflow-y-auto ">
            {relatedVideo
              ? relatedVideo?.map((video, i) => {
                  return <VideoHorizontal data={video} key={i} />;
                })
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Watch;
