import { NavLink } from "react-router-dom";

import { useLikedVideo } from "../context/LikedVideoContext";
import { getWatchLater } from "../context/WatchLaterContext";

export default function VideoListing({
  id,
  url,
  title,
  description,
  duration,
  thumbnail,
  detail
}) {
  const {
    isAlreadyLikedVideo,
    addVideoToLikedVideos,
    removeFromLiked
  } = useLikedVideo();
  const {
    isPresentInWatchLater,
    addVideoToWatchLater,
    removeFromWatchLater
  } = getWatchLater();

  const ButtonToLike = () => (
    <button onClick={() => addVideoToLikedVideos(id)}>Like</button>
  );

  const ButtonToDislike = () => (
    <button onClick={() => removeFromLiked(id)}>Liked</button>
  );

  const RemoveButtonForWatchLater = () => (
    <button onClick={() => removeFromWatchLater(id)}>
      Remove from Watch Later
    </button>
  );

  const ButtonToAddWatchLater = () => (
    <button onClick={() => addVideoToWatchLater(id)}>Add to Watch Later</button>
  );

  return (
    <div style={{
      width: detail && "400px",
    }} className="video-listing">
      {detail ? (
        <iframe
          width="100%"
          src={`https://www.youtube.com/embed/${url.split("=")[1]}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ) : (
        <NavLink to={`/videos/${id}`}>
          <img src={thumbnail} alt="status 404" />
        </NavLink>
      )}
      <p>{title}</p>
      {detail && (
        <>
          <p>
            Description: <strong>{description}</strong>
          </p>
          <p>Duration: {duration}</p>
        </>
      )}

      {isAlreadyLikedVideo(id) ? <ButtonToDislike /> : <ButtonToLike />}
      <hr />
      {isPresentInWatchLater(id) ? (
        <RemoveButtonForWatchLater />
      ) : (
        <ButtonToAddWatchLater />
      )}
    </div>
  );
}
