import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSearchVideo } from "../actions";
import { useEffect } from "react";

const SearchPage = () => {
  const dispatch = useDispatch();
  const { query } = useParams();
  const { searchVideos } = useSelector((state) => state.youtube);

  useEffect(() => {
    dispatch(getSearchVideo(query));
  }, [dispatch, query]);

  console.log(query);
  console.log(searchVideos);

  return (
    <div>
      <Navbar query={query} />
      <div className="mt-[80px]">
        {searchVideos
          ? searchVideos.map((videos, i) => {
              return <Search key={i} data={videos} />;
            })
          : ""}
      </div>
    </div>
  );
};

export default SearchPage;
