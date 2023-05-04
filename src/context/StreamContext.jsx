import { useState, useEffect, createContext, useContext } from "react";
import { fakeFetch, url } from "../library/videobase";

export const StreamContext = createContext();

export default function StreamProvider({ children }) {
  const [videos, setVideos] = useState([]);

  const fetch = async (url) => {
    try {
      const response = await fakeFetch(url);

      if (response.status === 200) {
        setVideos(response.data.videos);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetch(url);
  }, []);

  return (
    <StreamContext.Provider
      value={{
        videos
      }}
    >
      {children}
    </StreamContext.Provider>
  );
}

export const useStream = () => useContext(StreamContext);
