/* eslint-disable react/prop-types */
import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";
import { Link } from "react-router-dom";

const Sidebar = ({ visible }) => {
  const mainLinks = [
    {
      icon: <MdHomeFilled className="text-xl" />,
      name: "Home",
    },
    {
      icon: <FaRegCompass className="text-xl" />,
      name: "Explore",
    },
    {
      icon: <MdOutlineSlowMotionVideo className="text-xl" />,
      name: "Shorts",
    },
    {
      icon: <MdSubscriptions className="text-xl" />,
      name: "Subscriptions",
    },
  ];

  const secondaryLinks = [
    {
      icon: <MdOutlineVideoLibrary className="text-xl" />,
      name: "Library",
    },
    {
      icon: <MdHistory className="text-xl" />,
      name: "History",
    },
    {
      icon: <MdOutlineSmartDisplay className="text-xl" />,
      name: "Your Videos",
    },
    {
      icon: <MdOutlineWatchLater className="text-xl" />,
      name: "Watch Later",
    },
    {
      icon: <MdThumbUpOffAlt className="text-xl" />,
      name: "Liked Videos",
    },
  ];

  const subscriptionLinks = [
    {
      icon: <TbMusic className="text-xl" />,
      name: "Music",
    },
    {
      icon: <MdOutlineSportsVolleyball className="text-xl" />,
      name: "Sport",
    },
    {
      icon: <TbDeviceGamepad2 className="text-xl" />,
      name: "Gaming",
    },
    {
      icon: <GiFilmStrip className="text-xl" />,
      name: "Films",
    },
  ];

  const helpLinks = [
    {
      icon: <MdSettings className="text-xl" />,
      name: "Settings",
    },
    {
      icon: <MdOutlinedFlag className="text-xl" />,
      name: "Report history",
    },
    {
      icon: <MdOutlineHelpOutline className="text-xl" />,
      name: "Help",
    },
    {
      icon: <MdOutlineFeedback className="text-xl" />,
      name: "Send feedback",
    },
  ];

  return (
    <div
      className={`fixed shadow-xl overflow-auto h-screen w-[200px] bg-white top-14 shadow-xl transition-all ease-in-out duration-200 ${
        visible ? "left-0" : "left-[-1000px]"
      }`}
    >
      <div className="">
        <ul className="flex flex-col border-b-[1px] border-gray-600 pb-5">
          {mainLinks.map(({ icon, name }) => {
            return (
              <li
                key={name}
                className="pl-4 py-3 hover:bg-zinc-900 hover:text-white"
              >
                <Link
                  to="/home"
                  className="flex gap-2 items-center cursor-pointer"
                >
                  {icon} {name}
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className="flex flex-col border-b-[1px] border-gray-600 py-5">
          {secondaryLinks.map(({ icon, name }) => {
            return (
              <li
                key={name}
                className="pl-4 py-3 hover:bg-zinc-900 hover:text-white"
              >
                <Link to="/" className="flex gap-2 items-center cursor-pointer">
                  {icon} {name}
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className="flex flex-col border-b-[1px] border-gray-600 py-5">
          {subscriptionLinks.map(({ icon, name }) => {
            return (
              <li
                key={name}
                className="pl-4 py-3 hover:bg-zinc-900 hover:text-white"
              >
                <Link to="/" className="flex gap-2 items-center cursor-pointer">
                  {icon} {name}
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className="flex flex-col border-b-[1px] border-gray-600 py-5">
          {helpLinks.map(({ icon, name }) => {
            return (
              <li
                key={name}
                className="pl-4 py-3 hover:bg-zinc-900 hover:text-white"
              >
                <Link to="/" className="flex gap-2 items-center cursor-pointer">
                  {icon} {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
