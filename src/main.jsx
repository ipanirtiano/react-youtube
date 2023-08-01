import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducer";
import WatchPage from "./pages/WatchPage";
import SearchPage from "./pages/SearchPage";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/watch/:id",
    element: <WatchPage />,
  },
  {
    path: "/search/:query",
    element: <SearchPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  </React.StrictMode>
);
