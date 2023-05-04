import VideoListing from "../components/VideoListing";
import { getWatchLater } from "../context/WatchLaterContext";

export default function WatchLater() {
  const { watchLater } = getWatchLater();

  return (
    <>
    <h4>Watch Later</h4>
      {watchLater.length === 0 && (
        <p>
          <strong>No videos to watch later</strong>
        </p>
      )}
    <div className="videos-page">
      
      {watchLater.map((video) => (
        <VideoListing key={video.id} {...video} />
      ))}
    </div>
    </>
  );
}
