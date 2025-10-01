# React Router - Declarative Mode

Her viser jeg dig, hvordan du hurtigt får sat en React Router-app op i **Declarative Mode**. Dette er den klassiske måde at bruge React Router på, hvor du definerer routes direkte i dine komponenter med `<Routes>` og `<Route>`.

## Hvad er Declarative Mode?

Declarative Mode er den traditionelle måde at bruge React Router på. I stedet for at definere routes i en konfigurationsfil, renderer du `<Route>`-komponenter direkte i din JSX. Dette giver dig fuld kontrol over din routing direkte i dine komponenter.

**Forskellen mellem Framework Mode og Declarative Mode:**

- **Framework Mode** (som i `/demo`): Bruger konfigurationsfiler (`routes.js`, `react-router.config.js`), har indbygget SSR, data loading, og actions
- **Declarative Mode**: Bruger JSX-komponenter (`<Routes>`, `<Route>`), mere simpel, perfekt til client-side apps

## Installation

Start med at oprette et nyt Vite-projekt:

```bash
npm create vite@latest demo-declarative -- --template react
cd demo-declarative
```

Installer React Router:

```bash
npm install react-router
```

Det er det! Ingen ekstra konfiguration nødvendigt.

## Opsætning

### 1. Opsæt BrowserRouter

Åbn `src/main.jsx` og wrap din app i `<BrowserRouter>`:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

**Hvad gør BrowserRouter?**
- Håndterer browser historik (tilbage/frem knapper)
- Holder styr på den nuværende URL
- Gør routing-information tilgængelig for alle child komponenter

### 2. Opret dine sider

Lad os oprette nogle simple sider:

**Home side:**
```jsx
// src/pages/Home.jsx
export default function Home() {
  return (
    <div>
      <h1>Velkommen til hjemmesiden</h1>
      <p>Dette er din første React Router side!</p>
    </div>
  );
}
```

**About side:**
```jsx
// src/pages/About.jsx
export default function About() {
  return (
    <div>
      <h1>Om os</h1>
      <p>Her kan du læse mere om os.</p>
    </div>
  );
}
```

**Contact side:**
```jsx
// src/pages/Contact.jsx
export default function Contact() {
  return (
    <div>
      <h1>Kontakt</h1>
      <p>Send os en besked!</p>
    </div>
  );
}
```

**NotFound side:**
```jsx
// src/pages/NotFound.jsx
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div>
      <h1>404 - Siden blev ikke fundet</h1>
      <p>Beklager, denne side eksisterer ikke.</p>
      <Link to="/">Gå til forsiden</Link>
    </div>
  );
}
```

### 3. Opret Navigation

Lav en navigation-komponent:

```jsx
// src/components/Navigation.jsx
import { Link, NavLink } from "react-router";

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
      </ul>
    </nav>
  );
}
```

**NavLink vs Link:**
- `<Link>`: Standard navigation link
- `<NavLink>`: Som Link, men med ekstra styling muligheder baseret på om linket er aktivt

### 4. Opsæt Routes

Opdater din `App.jsx` til at bruge `<Routes>` og `<Route>`:

```jsx
// src/App.jsx
import { Routes, Route } from "react-router";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div>
      <Navigation />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
```

**Forklaring:**
- `<Routes>`: Container for alle dine routes
- `<Route index>`: Default route (vises på `/`)
- `<Route path="/about">`: Route til `/about`
- `<Route path="*">`: Catchall route (404)

## Routing Patterns

### Nested Routes

Du kan neste routes inde i hinanden:

```jsx
<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route index element={<DashboardHome />} />
    <Route path="settings" element={<Settings />} />
    <Route path="profile" element={<Profile />} />
  </Route>
</Routes>
```

I parent-komponenten skal du bruge `<Outlet>`:

```jsx
import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet /> {/* Child routes renders her */}
    </div>
  );
}
```

### Dynamic Segments

Brug `:` til at oprette dynamiske URL-segmenter:

```jsx
<Route path="/users/:userId" element={<User />} />
```

Hent værdien med `useParams`:

```jsx
import { useParams } from "react-router";

export default function User() {
  const { userId } = useParams();
  
  return <h1>User ID: {userId}</h1>;
}
```

### Optional Segments

Gør et segment valgfrit med `?`:

```jsx
<Route path="/:lang?/categories" element={<Categories />} />
```

### Splats (Catchall)

Match alt efter et segment med `*`:

```jsx
<Route path="/files/*" element={<Files />} />
```

```jsx
import { useParams } from "react-router";

export default function Files() {
  const params = useParams();
  const filePath = params["*"]; // indeholder resten af stien
  
  return <p>File: {filePath}</p>;
}
```

## Navigation

### Med Link-komponenten

```jsx
import { Link } from "react-router";

<Link to="/about">Om os</Link>
<Link to="/users/123">Bruger 123</Link>
```

### Programmatisk navigation

Brug `useNavigate` hook til at navigere i kode:

```jsx
import { useNavigate } from "react-router";

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send data...
    navigate("/thank-you");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Send</button>
    </form>
  );
}
```

**Navigate options:**
```jsx
// Naviger til en side
navigate("/about");

// Naviger tilbage
navigate(-1);

// Naviger frem
navigate(1);

// Replace (erstat i historik)
navigate("/login", { replace: true });
```

## URL Values

### URL Parameters

```jsx
import { useParams } from "react-router";

export default function BlogPost() {
  const { postId } = useParams();
  // URL: /blog/123 -> postId = "123"
}
```

### Search Parameters (Query Strings)

```jsx
import { useSearchParams } from "react-router";

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // URL: /search?q=react&sort=date
  const query = searchParams.get("q"); // "react"
  const sort = searchParams.get("sort"); // "date"
  
  // Opdater search params
  const handleFilter = () => {
    setSearchParams({ q: "vue", sort: "popular" });
  };
}
```

### Location Information

```jsx
import { useLocation } from "react-router";

export default function MyComponent() {
  const location = useLocation();
  
  console.log(location.pathname); // "/about"
  console.log(location.search);   // "?name=john"
  console.log(location.hash);     // "#section"
}
```

## Layout Routes

Routes uden `path` opretter et layout uden at tilføje URL-segmenter:

```jsx
<Routes>
  {/* Marketing layout */}
  <Route element={<MarketingLayout />}>
    <Route index element={<Home />} />
    <Route path="/contact" element={<Contact />} />
  </Route>

  {/* Dashboard layout */}
  <Route path="/dashboard" element={<DashboardLayout />}>
    <Route index element={<DashboardHome />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>
```

## Kør din app

```bash
npm run dev
```

Åbn browseren på `http://localhost:5173` og test din app!

## Komplet Eksempel

Her er et fuldt eksempel med alle features:

```jsx
// src/App.jsx
import { Routes, Route } from "react-router";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import User from "./pages/User";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div>
      <Navigation />
      <main>
        <Routes>
          {/* Basic routes */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          
          {/* Dynamic route */}
          <Route path="/users/:userId" element={<User />} />
          
          {/* 404 catchall */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
```
## Næste skridt

- Læs om [Link komponent](https://reactrouter.com/start/declarative/navigating) for avanceret navigation
- Lær om [URL values](https://reactrouter.com/start/declarative/url-values) for at arbejde med params og query strings
- Udforsk [nested routes](https://reactrouter.com/start/declarative/routing#nested-routes) for komplekse layouts

## Ressourcer

- [React Router Declarative Mode Docs](https://reactrouter.com/start/declarative/installation)
- [React Router API Reference](https://reactrouter.com/en/main)
