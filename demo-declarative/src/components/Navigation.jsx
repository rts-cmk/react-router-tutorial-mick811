import { NavLink } from "react-router";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Hjem
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Om os
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Kontakt
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/users/1"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Bruger Demo
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

