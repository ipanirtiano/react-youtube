/* eslint-disable react/prop-types */
import { useState } from "react";
import numeral from "numeral";
import moment from "moment";

const Descriptions = ({ data }) => {
  const [showMore, setShowMore] = useState(false);

  const descriptions = () => {
    if (data) {
      const des = data.snippet.description;
      const newDes = des.split("\n").map((str, i) => (
        <p key={i} className="font-light">
          {str}
        </p>
      ));

      return newDes;
    }
  };

  return (
    <div className="py-3 border-b-[1px] border-gray-400">
      <div
        className={`transition-all ease-in-out duration-500 ${
          showMore ? "" : "h-[100px] overflow-hidden"
        }`}
      >
        <p className="pb-2 flex gap-3">
          {data ? numeral(data.statistics.viewCount).format("0.a") : ""}
          <span>{data ? moment(data.snippet.publishedAt).fromNow() : ""}</span>
        </p>
        {/* {data ? data.snippet.description : ""} */}
        <p className="font-base">{descriptions()}</p>
      </div>
      <div
        className="mt-3 cursor-pointer"
        onClick={() => setShowMore(!showMore)}
      >
        Show More..
      </div>
    </div>
  );
};

export default Descriptions;
