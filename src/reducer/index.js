import { combineReducers } from "redux";
import YoutubeReducer from "./YoutubeReducer";

export const rootReducer = combineReducers({
  youtube: YoutubeReducer,
});
