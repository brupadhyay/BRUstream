import { useState, createContext, useContext } from "react";
import { useStream } from "./StreamContext";

export const LikedVideoContext = createContext();

export default function LikedVideoProvider({ children }) {
  const [likedVideos, setLikedVideos] = useState([]);
  const { videos } = useStream();

  const isAlreadyLikedVideo = (videoId) => {
    return likedVideos.find(({ id }) => id === videoId) ? true : false;
  };

  const addVideoToLikedVideos = (videoId) => {
    const videoToAdd = videos.find(({ id }) => id === videoId);
    setLikedVideos([...likedVideos, videoToAdd]);
  };

  const removeFromLiked = (videoId) => {
    setLikedVideos(likedVideos.filter(({ id }) => id !== videoId));
  };

  return (
    <LikedVideoContext.Provider
      value={{
        likedVideos,
        isAlreadyLikedVideo,
        addVideoToLikedVideos,
        removeFromLiked
      }}
    >
      {children}
    </LikedVideoContext.Provider>
  );
}

export const useLikedVideo = () => useContext(LikedVideoContext);
