import { Link } from "react-router";

export default function ThankYou() {
  return (
    <div>
      <h1>Tak for din besked!</h1>
      <p>Vi har modtaget din henvendelse og vender tilbage snarest muligt.</p>
      <p><Link to="/">Gå til forsiden</Link></p>
    </div>
  );
}