import { Outlet, Scripts } from "react-router";
import Navigation from "./components/navigation";

export default function App() {
  return (
    <html>
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
      </head>
      <body>
        <Navigation />
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
