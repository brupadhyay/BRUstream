import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="app">
      <h3>The Page you're looking for is not found</h3>
      <button onClick={() => navigate("/videos")}>Go to Videos</button>
    </div>
  );
}
