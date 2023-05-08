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
  const [bar, setBar] = useState(false);

  let handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <>
      <div className="nav">
        <div className="logo-container">
          <FaBars
            className="icons menu"
            onClick={() => {
              setBar(bar ? false : true);
            }}
          />
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
      {/* side bar */}
      <div className={bar ? "side-bar show" : "side-bar none"}>
        <div>
          <Link>Home</Link>
          <Link>Shorts</Link>
          <Link>Subscription</Link>
          <Link>Originals</Link>
          <Link>YouTube Music</Link>
        </div>
        <div>
          <Link>Storage box</Link>
          <Link>Viewing record</Link>
          <Link>My Videos</Link>
          <Link>My Movies</Link>
          <Link>Videos to watch later</Link>
        </div>
        <div>
          <h2>Subscription</h2>
          <Link>MrBeast</Link>
          <Link>NBA</Link>
          <Link>Bill Evans</Link>
          <Link>Chet Baker</Link>
          <Link>Joo Pearl</Link>
          <Link>Calmdown Man</Link>
          <Link>UFC</Link>
        </div>
      </div>
    </>
  );
}
