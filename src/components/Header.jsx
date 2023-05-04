import { NavLink } from "react-router-dom";
import { useLikedVideo } from "../context/LikedVideoContext";
import { getWatchLater } from "../context/WatchLaterContext";

export default function Header() {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "red" : "white",
    padding: "8px 12px",
    textDecoration: "none"
  });

  const { likedVideos } = useLikedVideo();
  const { watchLater } = getWatchLater();

  return (
    <div className="header">
      <NavLink style={getActiveStyle} to="/">
        Home
      </NavLink>
      <NavLink style={getActiveStyle} to="/videos">
        Videos
      </NavLink>
      <NavLink style={getActiveStyle} to="/liked">
        Liked Videos ({likedVideos.length})
      </NavLink>
      <NavLink style={getActiveStyle} to="/watchlater">
        Watch Later ({watchLater.length})
      </NavLink>
    </div>
  );
}
