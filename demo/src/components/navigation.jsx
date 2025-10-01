import { Link } from "react-router";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Hjem</Link></li>
        <li><Link to="/about">Om os</Link></li>
        <li><Link to="/contact">Kontakt</Link></li>
      </ul>
    </nav>
  );
}