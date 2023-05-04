import "./styles.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import LikedVideos from "./pages/LikedVideos";
import WatchLater from "./pages/WatchLater";
import VideoPage from "./pages/VideoPage";
import NotFound from "./pages/error/NotFound";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/videos/:embedId" element={<VideoPage />} />
        <Route path="/liked" element={<LikedVideos />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
