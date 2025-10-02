import { Outlet, Scripts, Links } from "react-router";
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
        <main>
          <Outlet />
        </main>
        <Scripts />
      </body>
    </html>
  );
}

