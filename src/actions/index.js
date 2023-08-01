import request from "../api";

export const constanst = {
  GET_HOME_VIDEO: "GET_HOME_VIDEO",
  GET_VIDEO_BY_CATEGORY: "GET_VIDEO_BY_CATEGORY",
  GET_VIDEO_BY_ID: "GET_VIDEO_BY_ID",
  GET_CHANNEL_ICON: "GET_CHANNEL_ICON",
  GET_RELATED_VIDEO: "GET_RELATED_VIDEO",
  GET_SEARCH_VIDEO: "GET_SEARCH_VIDEO",
  GET_CHANNEL_DETAIL: "GET_CHANNEL_DETAIL",
};

export const getHomeVideos = () => async (dispatch) => {
  try {
    const { data } = await request("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "ID",
        maxResults: 20,
      },
    });

    dispatch({
      type: constanst.GET_HOME_VIDEO,
      payload: {
        videos: data.items,
        nextpageToken: data.nextPageToken,
        category: "All",
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getVideoById = (id) => async (dispatch) => {
  try {
    const { data } = await request("videos", {
      params: {
        part: "snippet,statistics",
        id: id,
      },
    });

    dispatch({
      type: constanst.GET_VIDEO_BY_ID,
      payload: {
        videos: data.items[0],
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const getRelatedVideo = (id) => async (dispatch) => {
  try {
    const { data } = await request("search", {
      params: {
        part: "snippet",
        relatedToVideoId: id,
        maxResults: 15,
        type: "video",
      },
    });

    dispatch({
      type: constanst.GET_RELATED_VIDEO,
      payload: {
        videos: data.items,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const getChannelIcon = (data) => (dispatch) => {
  dispatch({
    type: constanst.GET_CHANNEL_ICON,
    payload: data,
  });
};

export const getSearchVideo = (keyword) => async (dispatch) => {
  try {
    const { data } = await request("search", {
      params: {
        part: "snippet",
        maxResults: 15,
        q: keyword,
        type: "video,channel",
      },
    });

    dispatch({
      type: constanst.GET_SEARCH_VIDEO,
      payload: {
        videos: data.items,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};
