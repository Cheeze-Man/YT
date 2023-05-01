import {
  FaBars,
  FaYoutube,
  FaSearch,
  FaCamera,
  FaRegBell,
} from "react-icons/fa";
import React from "react";
import profile from "../proflle.jpg";

export default function NavBar() {
  return (
    <div className="nav">
      <div className="left">
        <FaBars className="icons menu" />
        <FaYoutube className="icons logo" />
        <a>YouTube</a>
      </div>
      <div className="mid">
        <form>
          <input type="text" placeholder="검색" className="search-bar" />
          <button className="search-btn">
            <FaSearch className="sb" />
          </button>
        </form>
      </div>
      <div className="right">
        <FaCamera className="icons li" />
        <FaRegBell className="icons li" />
        <img src={profile} alt="profile" className="profile" />
      </div>
    </div>
  );
}
