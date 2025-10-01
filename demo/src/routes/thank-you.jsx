import { Link } from "react-router";

export default function ThankYou() {
  return (
    <div>
      <h1>Tak for din besked!</h1>
      <p>Vi vil kontakte dig snart.</p>
      <Link to="/">Gå til forsiden</Link>
    </div>
  );
}