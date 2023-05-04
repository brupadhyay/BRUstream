import { useParams } from "react-router-dom";
import VideoListing from "../components/VideoListing";
import { useStream } from "../context/StreamContext";

export default function VideoPage() {
  const { embedId } = useParams();
  const { videos } = useStream();

  console.log(embedId);

  const getVideo = (videos, embedId) =>
    videos.find(({ id }) => id.toString() === embedId.toString());

  const videoDetailToDisplay = getVideo(videos, embedId);

  return <VideoListing {...videoDetailToDisplay} detail />;
}
