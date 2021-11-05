import React from "react";
import "./watch.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function Watch() {
  const location = useLocation();
  const movie = location.movie;
  console.log(location);
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackIcon />
          Home
        </div>
      </Link>
      <video
        className="video"
        autoPlay
        progress
        controls
        src={movie.video}
      ></video>
    </div>
  );
}
