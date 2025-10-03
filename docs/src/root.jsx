import { Outlet, Scripts, Links, NavLink } from "react-router";
import "./index.css";

export default function App() {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Links />
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
      </head>
      <body>
        <header className="p-4">
          <nav className="flex justify-between items-center">
            <div className="text-white text-lg font-bold">
              <NavLink to="/" className="hover:text-blue-400">
                React Router Guide
              </NavLink>
            </div>
            <ul className="flex gap-4">
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-white">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-300 hover:text-white">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
        <Scripts />
      </body>
    </html>
  );
}

