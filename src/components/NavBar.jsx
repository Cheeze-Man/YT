import {
  FaBars,
  FaYoutube,
  FaSearch,
  FaCamera,
  FaRegBell,
} from "react-icons/fa";
import React, { useEffect, useState } from "react";
import profile from "../proflle.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function NavBar() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <div className="nav">
      <div className="logo-container">
        <FaBars className="icons menu" />
        <Link to="/" className="link">
          <FaYoutube className="icons logo" />
          YouTube
        </Link>
      </div>
      <form className="search-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">
          <FaSearch className="sb" />
        </button>
      </form>
      <div className="profile-container">
        <FaCamera className="icons li" />
        <FaRegBell className="icons li" />
        <img src={profile} alt="profile" className="profile" />
      </div>
    </div>
  );
}
