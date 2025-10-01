import { Link, useLocation } from "react-router";

export default function NotFound() {
  const location = useLocation();
  
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Siden blev ikke fundet</h2>
      <p>Beklager, siden <code>{location.pathname}</code> eksisterer ikke.</p>
      <Link to="/">Gå til forsiden</Link>
    </div>
  );
}