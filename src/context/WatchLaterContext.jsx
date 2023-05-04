import { useState, createContext, useContext } from "react";
import { useStream } from "./StreamContext";

export const WatchLaterContext = createContext();

export default function WatchLaterProvider({ children }) {
  const [watchLater, setWatchLater] = useState([]);
  const { videos } = useStream();

  const isPresentInWatchLater = (videoId) => {
    return watchLater.find(({ id }) => id === videoId) ? true : false;
  };

  const addVideoToWatchLater = (videoId) => {
    const videoToAdd = videos.find(({ id }) => id === videoId);
    setWatchLater([...watchLater, videoToAdd]);
  };

  const removeFromWatchLater = (videoId) => {
    setWatchLater(watchLater.filter(({ id }) => id !== videoId));
  };

  return (
    <WatchLaterContext.Provider
      value={{
        watchLater,
        isPresentInWatchLater,
        addVideoToWatchLater,
        removeFromWatchLater
      }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
}

export const getWatchLater = () => useContext(WatchLaterContext);
