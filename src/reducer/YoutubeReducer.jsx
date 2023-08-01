import { constanst } from "../actions";

const YoutubeReducer = (
  state = {
    videos: [],
    nextPageToken: null,
    activeCategory: "All",
    videoDetails: false,
    channelIcon: false,
    relatedVideo: false,
    searchVideos: false,
  },
  action
) => {
  switch (action.type) {
    case constanst.GET_HOME_VIDEO:
      return {
        ...state,
        videos: action.payload.videos,
        nextPageToken: action.payload.nextPageToken,
        activeCategory: action.payload.category,
      };

    case constanst.GET_VIDEO_BY_CATEGORY:
      return {
        ...state,
        videos: action.payload.videos,
        nextPageToken: action.payload.nextPageToken,
        activeCategory: action.payload.category,
      };

    case constanst.GET_VIDEO_BY_ID:
      return {
        ...state,
        videoDetails: action.payload.videos,
      };

    case constanst.GET_RELATED_VIDEO:
      return {
        ...state,
        relatedVideo: action.payload.videos,
      };

    case constanst.GET_CHANNEL_ICON:
      return {
        ...state,
        channelIcon: action.payload,
      };

    case constanst.GET_SEARCH_VIDEO:
      return {
        ...state,
        searchVideos: action.payload.videos,
      };
    default:
      return state;
  }
};

export default YoutubeReducer;
