import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import LikedVideoProvider from "./context/LikedVideoContext";
import StreamProvider from "./context/StreamContext";
import WatchLaterProvider from "./context/WatchLaterContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <StreamProvider>
      <LikedVideoProvider>
        <WatchLaterProvider>
          <Router>
            <App />
          </Router>
        </WatchLaterProvider>
      </LikedVideoProvider>
    </StreamProvider>
  </StrictMode>
);
