/* eslint-disable react/prop-types */
import { AiOutlineSearch } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ query }) => {
  const [input, setInput] = useState(query);
  const navigate = useNavigate();
  // set togle show and hide navbar
  const [togle, setTogle] = useState(false);
  // set togle active
  const handleClick = () => {
    setTogle(!togle);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-[100]">
      <div className="flex md:justify-between justify-around items-center px-4 h-14 bg-[#1f1f1f] text-white">
        <div className="flex gap-2 md:gap-6 items-center text-2xl">
          <div>
            <GiHamburgerMenu className="cursor-pointer" onClick={handleClick} />
          </div>
          <Link to="/">
            <div className="lg:flex gap-1 items-center justify-center hidden">
              <BsYoutube className="text-3xl text-red-600 cursor-pointer" />
              <span className="text-xl cursor-pointer">YouTube</span>
            </div>
          </Link>
        </div>

        <div className="flex items-center md:justify-center md:gap-2">
          <form action="" onSubmit={handleSubmit}>
            <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0">
              <div className="flex gap-4 items-center pr-5">
                <div>
                  <AiOutlineSearch />
                </div>
                <input
                  type="text"
                  className="w-full md:w-96 bg-zinc-900 focus:outline-none border-none"
                  placeholder="Search"
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                />
              </div>
              <button className="h-10 px-3 2-16 flex items-center justify-center bg-zinc-800">
                <AiOutlineSearch className="text-xl" />
              </button>
            </div>
          </form>

          <div className="text-xl p-3 bg-zinc-900 rounded-full md:block hidden">
            <TiMicrophone className="cursor-pointer" />
          </div>
        </div>

        <div className="flex gap-5 items-center text-xl cursor-pointer">
          <BsCameraVideo className="hidden md:block" />
          <div className="relative hidden md:block cursor-pointer">
            <BsBell />
            <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
              9+
            </span>
          </div>
          <span className="material-symbols-outlined w-9 h-9 rounded-full hidden md:block text-3xl text-gray-300 cursor-pointer">
            account_circle
          </span>
        </div>
        <Sidebar visible={togle} />
      </div>
    </header>
  );
};

export default Navbar;
