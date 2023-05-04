import VideoListing from "../components/VideoListing";
import { useStream } from "../context/StreamContext";

export default function Videos() {
  const { videos } = useStream();

  if (!videos.length) return <p>Hold on, I'm working...</p>;

  return (
    <>
      <h4>All Videos</h4>
      <div className="videos-page">
        {videos.map((video) => (
          <VideoListing key={video.id} {...video} />
        ))}
      </div>
    </>
  );
}
