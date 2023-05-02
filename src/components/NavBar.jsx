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
      <div className="logo-container">
        <FaBars className="icons menu" />
        <a href="#">
          <FaYoutube className="icons logo" />
          YouTube
        </a>
      </div>
      <div className="search-container">
        <input type="text" placeholder="검색" />
        <button type="submit">
          <FaSearch className="sb" />
        </button>
      </div>
      <div className="profile-container">
        <FaCamera className="icons li" />
        <FaRegBell className="icons li" />
        <img src={profile} alt="profile" className="profile" />
      </div>
    </div>
  );
}
