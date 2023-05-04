import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="app-home">
      <h1>Welcome to BRUstream</h1>
      <h4>
        To browse all videos, click the below button or go to the videos page
      </h4>
      <button className="home-btn" onClick={() => navigate("/videos")}>
        Explore Videos{" "}
      </button>
    </div>
  );
}
