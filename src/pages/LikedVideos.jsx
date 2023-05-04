import VideoListing from "../components/VideoListing";
import { useLikedVideo } from "../context/LikedVideoContext";

export default function LikedVideos() {
  const { likedVideos } = useLikedVideo();
  return (
    <>
    <h4>Liked Videos</h4>
      {likedVideos.length === 0 && (
        <p>
          <strong>Please like some videos to view it here</strong>
        </p>
      )}
    <div className="videos-page">
      
      {likedVideos.map((video) => (
        <VideoListing key={video.id} {...video} like />
      ))}
    </div>
    </>
  );
}
