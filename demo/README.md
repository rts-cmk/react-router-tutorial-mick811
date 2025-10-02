# React Router

Her viser jeg dig, hvordan du hurtigt får sat en React Router-app op fra bunden. Vi starter helt simpelt, så du kan se præcis, hvad der skal til for at komme i gang.

## Installation

Du kan nemt oprette et nyt React-projekt med React Router inkluderet ved at køre denne kommando i din terminal:
```
npx create-react-router app
```

## Manuel opsætning
Først og fremmest, skal du opsætte vite. Jeg laver en vite applikation som hedder `app`, hvor jeg siger den skal bruge react template, dette vælger automatisk JavaScript som standard.
```
npm create vite@latest app -- --template react
```
Efter du har gjort det, skal du installere alle dependencies ved at køre følgende kommandoer i din terminal:
En dependency er i grove træk et ekstern bibliotek, med en masse kode som din applikation har brug for at kunne implementere specifikke løsninger
f.eks. det React Router tilbyder.

```
npm i react-router @react-router/node @react-router/serve isbot react react-dom
npm i -D @react-router/dev vite
```

Inden du begynder skal du slette alting under `src` mappen.

Derefter skal du finde din `vite.config.js`, den kan du finde i root folderen af din `app` folder. Så snart du har fundet den, skal du bruge den her basale konfiguration.
```js
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRouter()],
});
```
Nu har du lavet din Vite opsætning, nu skal du begynde at integrere React Router, hvilket du gør således.

1. Først skal du oprette `root.jsx` under din `src` mappe, hvor du skal paste dette ind.
```js
import { Outlet, Scripts } from "react-router";

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
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
```
Lad os forklare, hvad koden i `root.jsx` gør:

**`<Outlet />`**:

Dette er en komponent fra React Router, som renderer den matchende underrute af en overordnet rute eller ingenting, hvis ingen underrute matcher. Det betyder, at når du navigerer til forskellige ruter i din applikation, vil indholdet af den specifikke underrute blive vist her, hvor `<Outlet />` er placeret.

**`<Scripts />`**: 

Dette er en komponent fra React Router, som renderer klient-runtime af din applikation. Den skal placeres inde i `<body>`-elementet i dokumentet for at sikre, at scripts og runtime-logik kører korrekt i browseren.

2. Efter du har lavet din `root.jsx` skal du lave en `routes.js` under din `src` mappe. 

`routes.js` er der hvor du definere dine routes. Det er et krav at den eksisterer for at kunne åbne siden. Lige nu, er det fint den er tom, du kan dog læse mere om det på [React Router's Routing](https://reactrouter.com/start/framework/routing) guide.

Dette er sådan din `routes.js` skal se ud for nu. Ik tag dig af, at vi ikke bruger den endnu, det kommer vi til, derudover skal jeg nok forklare hvad index gør senere hen i guiden.
```js
import { index } from "@react-router/dev/routes";

export default []
```

3. Når du har gjort det, skal du specificere `type` som module i din `package.json`, hvis den ikke allerede er sat til module, da det er krævet for React Router til at fungere.
```
npm pkg set type="module"
```

4. Så skal du lave en `react-router.config.js`, det er React Router v7's hovedkonfigurationsfil. Den bruges til at konfigurere hvordan React Router skal bygge og køre din applikation.
```js
export default {
   // hvor din kode ligger (aka root.jsx, routes/, osv.).
   appDirectory: './src',
   ssr: true // server side rendering, ja eller nej
   /* 
      jeg bruger ik andre end det her, men du kan selv
      eksperimentere med andre, hvis det er det du ønsker.
   */
};
```

Nu det sidste du rent faktisk mangler, er at lave en side, og dermed teste for at se om alting virker som det skal.

1. Du skal starte med at gå ind i din `src/routes.js`. Dette er sådan din fil ser ud indtil videre.
```js
import { index } from "@react-router/dev/routes";

export default []
```
For at kunne tilføje en route, har vi 4 konfigurations-funktioner at vælge imellem: `layout`, `index`, `route` og `prefix`. 

### De 4 routing-funktioner

**1. `route(path, file, children?)`** - Skaber en normal route
```js
route("about", "routes/about.jsx")
route("teams/:teamId", "routes/team.jsx") // med dynamic segment
```

**2. `index(file)`** - Skaber en index route (standard side for en parent route)
```js
index("routes/home.jsx") // renders på `/`
```

**3. `layout(file, children)`** - Skaber en layout route uden at tilføje URL segments
```js
layout("routes/marketing/layout.jsx", [
  index("routes/marketing/home.jsx"),
  route("contact", "routes/marketing/contact.jsx"),
])
```

**4. `prefix(path, children)`** - Tilføjer en path prefix til en gruppe af routes
```js
...prefix("concerts", [
  index("routes/concerts/home.jsx"),
  route(":city", "routes/concerts/city.jsx"),
])
```

### Path patterns du kan bruge i routes

Inden for `route()` og `prefix()` kan du bruge forskellige path patterns:

**Dynamic Segments** - Matcher dynamiske værdier i URL'en
```js
route("teams/:teamId", "routes/team.jsx")
// matcher: /teams/123, /teams/abc, osv.
// params.teamId vil indeholde værdien
```

**Optional Segments** - Gør et segment valgfrit med `?`
```js
route(":lang?/categories", "routes/categories.jsx")
// matcher både: /categories OG /da/categories
```

**Splats (Catchall)** - Matcher alt efter `/*`
```js
route("files/*", "routes/files.jsx")
// matcher: /files/docs/guide.pdf
// params["*"] indeholder "docs/guide.pdf"
```

**404 Catchall Route** - Fanger alle ikke-matchende routes
```js
route("*", "routes/not-found.jsx")
// matcher alle URLs der ikke matcher andre routes
```

### Eksempel på routes.js
```js
import { route, index, layout, prefix } from "@react-router/dev/routes";

export default [
  // Index route på /
  index("routes/home.jsx"),
  
  // Normal route
  route("about", "routes/about.jsx"),
  
  // Dynamic segment
  route("users/:userId", "routes/user.jsx"),
  
  // Nested routes med layout
  layout("routes/dashboard-layout.jsx", [
    index("routes/dashboard-home.jsx"),
    route("settings", "routes/settings.jsx"),
  ]),
  
  // Prefix gruppe
  ...prefix("blog", [
    index("routes/blog/home.jsx"),
    route(":slug", "routes/blog/post.jsx"),
  ]),
  
  // 404 catchall (skal være sidst)
  route("*", "routes/not-found.jsx"),
];
```

**Vigtig note:** Mappenavnet "routes" er kun et eksempel - du kan organisere dine route-filer i hvilken som helst mappestruktur du ønsker, så længe stien i `routes.js` matcher den faktiske fil-placering.

Læs mere om routing patterns i [React Router's officielle routing guide](https://reactrouter.com/start/framework/routing).


## Oprettelse af sider og navigation

Nu hvor du har sat dit routing system op, skal vi oprette faktiske sider og lære hvordan man navigerer mellem dem.

### 1. Opret din første side

Lad os starte med at lave en simpel hjemmeside. Opret en fil under `src/routes/` kaldet `home.jsx`:

```js
// src/routes/home.jsx
export default function Home() {
  return (
    <div>
      <h1>Velkommen til hjemmesiden</h1>
      <p>Dette er din første React Router side!</p>
    </div>
  );
}
```

### 2. Tilføj ruten til routes.js

Nu skal du registrere siden i din `routes.js`:

```js
import { index } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"), // index betyder denne side vises på `/`
];
```

### 3. Opret flere sider

Lad os oprette et par sider mere, så vi har noget at navigere mellem:

**About side:**
```js
// src/routes/about.jsx
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
```js
// src/routes/contact.jsx
export default function Contact() {
  return (
    <div>
      <h1>Kontakt</h1>
      <p>Send os en besked!</p>
    </div>
  );
}
```

Opdater nu din `routes.js`:

```js
import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("about", "routes/about.jsx"),
  route("contact", "routes/contact.jsx"),
];
```

### 4. Navigation med Link

For at navigere mellem sider bruger vi `<Link>`-komponenten fra React Router. Den fungerer som et `<a>`-tag, men uden at genindlæse hele siden.

Lad os oprette en navigation-komponent:

```js
// src/components/navigation.jsx
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
```

**Vigtigt:** Bemærk at vi importerer `Link` fra `"react-router"` (ikke `"react-router-dom"`).

### 5. Tilføj navigation til root.jsx

Nu skal vi tilføje vores navigation til `root.jsx`, så den vises på alle sider:

```js
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
```

### 6. Test din applikation

Kør din applikation:

```bash
npx react-router dev
```

Nu skulle du gerne kunne:
- Se navigationen på alle sider
- Klikke på links og navigere mellem siderne
- Bemærke at siden ikke genindlæser (SPA!)

### Navigation med useNavigate hook

Hvis du har brug for at navigere programmatisk (f.eks. efter en formular er indsendt), kan du bruge `useNavigate` hook:

```js
import { useNavigate } from "react-router";

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formular data...
    
    // Naviger til tak-siden
    navigate("/thank-you");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Send</button>
    </form>
  );
}
```

### 404 - Ikke fundet side

Til sidst bør du altid lave en 404-side til URLs der ikke eksisterer:

```js
// src/routes/not-found.jsx
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

Tilføj den til `routes.js` som den sidste route:

```js
import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("about", "routes/about.jsx"),
  route("contact", "routes/contact.jsx"),
  route("*", "routes/not-found.jsx"), // Fanger alle andre URLs
];
```

Nu har du en fuldt fungerende React Router applikation med navigation! 🎉

## Næste skridt

- Læs om [data loading](https://reactrouter.com/start/framework/data-loading) for at hente data til dine sider
- Lær om [actions](https://reactrouter.com/start/framework/actions) for at håndtere formular submissions
- Udforsk [nested routes](https://reactrouter.com/start/framework/routing#nested-routes) for mere komplekse layouts