import { Markdown, CodeBlock } from "../components/code-block";
import Section from "../components/section";
import Highlighter from "../components/highlightText";

export default function Home() {
  return (
    <>
      <Section title={"React Router Guide"}>
        <p>
          <strong>React Router</strong> er et populær library til at håndtere navigation og routing i React-applikationer.
          Det giver dig mulighed for at opdele din app i forskellige sider eller visninger, som brugeren kan navigere imellem uden at genindlæse hele siden.
        </p>

        <div data-gap-block>
          <p>
            <strong>Declarative Mode</strong> betyder, at du beskriver <em>hvad</em> du vil have (aka. hvilke routes der skal eksistere)
            i stedet for <em>hvordan</em> routing skal implementeres teknisk. Du bruger JSX-komponenter som
            <Highlighter action="underline" color="#10b981" strokeWidth={2}>{`<Routes>`}</Highlighter> og
            <Highlighter action="underline" color="#10b981" strokeWidth={2}>{`<Route>`}</Highlighter>
            til at definere din routing-struktur direkte i din kode, ligesom du definerer andre UI-elementer.
          </p>

          <p data-gap-block>
            Dette er anderledes end <strong>Framework Mode</strong>, hvor du definerer routes i separate konfigurationsfiler.
            Declarative Mode giver dig mere kontrol og fleksibilitet, mens Framework Mode giver dig flere indbyggede features som
            server-side rendering og data loading.
          </p>
        </div>
      </Section>
      <Section title={"Installation"}>
        <p>
          Lad os starte fra bunden og oprette et helt nyt React projekt med Vite.
          <Highlighter action="underline" color="#3b82f6" strokeWidth={2}>
            Vite er en moderne build-tool
          </Highlighter>
          {" "}der gør udvikling hurtigere med instant hot reload, optimeret bundling og hurtig startup-tid.
        </p>

        <CodeBlock
          language="bash"
          code="npm create vite@latest app -- --template react"
        />
        <p>
          Hvad det egentlig betyder, er at vi opretter en Vite applikation med React som template, og JavaScript som standard.
          For det næste trin, skal du installere React Router.
        </p>
        <CodeBlock
          language="bash"
          code="npm install react-router"
        />
        <p>
          Det er det! Du har nu en Vite applikation med React Router installeret.
          Nu skal vi dog opsætte komponenterne, for at vi kan begynde at bruge React Router.
        </p>
      </Section>

      <Section title={"Opsætning"}>
        <p>
          Først og fremmest, skal du oprette en <Markdown>{`main.jsx`}</Markdown> fil under din <Markdown>{`src`}</Markdown> mappe.
          Denne fil skal indeholde din app-struktur, og hvordan du vil have dit routing system opbygget.
          Vi starter med kun én route, og tilføjer flere senere, når vi har oprettet de nødvendige sider.
        </p>
        <CodeBlock
          code={`// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
);
`}
        />
        <p>
          <Highlighter action="underline" color="#10b981" strokeWidth={2}>{`<BrowserRouter>`}</Highlighter>
          {" "}er den komponent der aktiverer routing i din app. Den håndterer URL-ændringer og browser historik
          uden at genindlæse siden, så navigation bliver hurtig og flydende.
        </p>

        <p>
          <Highlighter action="underline" color="#ef4444" strokeWidth={2}>
            Vigtigt: Brug kun én BrowserRouter per app
          </Highlighter>
          {"typisk i din "}<Markdown>{`<main.jsx />`}</Markdown>{" komponent som vist ovenfor."}
        </p>
        <p data-gap-block>
          Nu er vi klar til at tilpasse vores startside. Vi går ind i vores allerede oprettede <Markdown>{`src/App.jsx`}</Markdown> fil og laver den om, så den er klar til at navigere til en side, vi opretter senere.
        </p>
        <CodeBlock
          code={`// src/App.jsx
import { Link } from "react-router";

export default function App() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">About</Link>
    </div>
  );
}`}
        />
        <p>
          Nu opretter vi en ny side, så vi kan teste routing senere. Vi laver en <Markdown>{`about.jsx`}</Markdown> fil under <Markdown>{`src/routes`}</Markdown> mappe, og strukturerer den således.
        </p>
        <CodeBlock
          code={`// src/routes/about.jsx
import { Link } from "react-router";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/">Home</Link>
    </div>
  );
}`}
        />
        <p>
          Når du har oprettet About-siden, kan du tilføje den til dine routes i <Markdown>{`src/main.jsx`}</Markdown>. Opdater din kode således:
        </p>
        <CodeBlock
          code={`// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import About from "./routes/about";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>,
);
`}
        />
        <p>
          Ved at tilføje routes først efter siderne er oprettet, undgår du potentielle fejl og gør din kode mere overskuelig.
        </p>
      </Section>

      <Section title={"Route Patterns"}>
        <p>
          React Router tilbyder forskellige patterns til at matche URLs. Her er de vigtigste typer du skal kende:
        </p>

        <p><strong>Index Route</strong></p>
        <CodeBlock
          code={`<Route index element={<Home />} />`}
        />
        <p>
          <Highlighter action="underline" color="#10b981" strokeWidth={2}>Index routes</Highlighter>
          {" "}matcher når URL'en er præcis den samme som parent route. Hvis du har <Markdown>/</Markdown> som base,
          matcher index route kun <Markdown>/</Markdown> - ikke <Markdown>/something</Markdown>.
        </p>

        <p><strong>Static Path</strong></p>
        <CodeBlock
          code={`<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />`}
        />
        <p>
          <Highlighter action="underline" color="#3b82f6" strokeWidth={2}>Static paths</Highlighter>
          {" "}matcher eksakte URL'er. <Markdown>path="/about"</Markdown> matcher kun <Markdown>/about</Markdown>,
          ikke <Markdown>/about/team</Markdown> eller <Markdown>/about-us</Markdown>.
        </p>

        <p><strong>Dynamic Segments</strong></p>
        <CodeBlock
          code={`<Route path="/users/:userId" element={<User />} />
<Route path="/cities/:city" element={<City />} />
<Route path="/blog/:year/:month/:slug" element={<BlogPost />} />`}
        />
        <p>
          <Highlighter action="underline" color="#8b5cf6" strokeWidth={2}>Dynamic segments</Highlighter>
          {" "}starter med <Markdown>:</Markdown> og matcher alt i den position. <Markdown>:userId</Markdown> matcher
          <Markdown>/users/123</Markdown>, <Markdown>/users/john</Markdown>, eller <Markdown>/users/abc-def</Markdown>.
        </p>

        <p><strong>Catchall Route (404)</strong></p>
        <CodeBlock
          code={`<Route path="*" element={<NotFound />} />`}
        />
        <p>
          <Highlighter action="underline" color="#ef4444" strokeWidth={2}>Catchall routes</Highlighter>
          {" "}med <Markdown>path="*"</Markdown> matcher alle URLs der ikke matcher andre routes.
          Perfekt til 404-sider. Placér altid denne route sidst!
        </p>

        <p><strong>Hent værdier fra dynamic routes</strong></p>
        <CodeBlock
          code={`// I din komponent
import { useParams } from "react-router";

export default function City() {
  const { city } = useParams();
  
  return <h1>Velkommen til {city}!</h1>;
}`}
        />
        <p>
          Brug <Highlighter action="underline" color="#8b5cf6" strokeWidth={2}>useParams()</Highlighter>
          {" "}hook til at hente værdier fra URL'en. Hvis URL'en er <Markdown>/cities/copenhagen</Markdown>,
          får du <Markdown>city = "copenhagen"</Markdown>.
        </p>

        <p><strong>Komplet eksempel med alle patterns</strong></p>
        <CodeBlock
          code={`<Routes>
  {/* Index route - matcher "/" */}
  <Route index element={<Home />} />
  
  {/* Static routes - matcher eksakte paths */}
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  
  {/* Dynamic routes - matcher variable værdier */}
  <Route path="/users/:userId" element={<User />} />
  <Route path="/cities/:city" element={<City />} />
  <Route path="/blog/:year/:month/:slug" element={<BlogPost />} />
  
  {/* Catchall - matcher alt andet (404) */}
  <Route path="*" element={<NotFound />} />

  {/* Nested routes - matcher paths inden i en parent route */}
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="profile" element={<Profile />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>`}
        />
        <p>
          <Highlighter action="underline" color="#10b981" strokeWidth={2}>Nested routes</Highlighter>
          {" "}matcher paths inden i en parent route. Hvis du har <Markdown>/dashboard</Markdown> som base,
          matcher nested routes kun <Markdown>/dashboard/profile</Markdown> og <Markdown>/dashboard/settings</Markdown>.
        </p>
      </Section>

      <Section title={"Navigation"}>
        <p>
          Nu skal vi lære at navigere mellem vores sider. Vi bruger <Highlighter action="underline" color="#10b981" strokeWidth={2}>Link</Highlighter>, komponenten til at navigere, derudover findes der også <Highlighter action="underline" color="#10b981" strokeWidth={2}>NavLink</Highlighter>, som kan bruges til at navigere og har ekstra styling muligheder baseret på om linket er aktivt.
        </p>
        <p data-gap-block>
          Vi kan bruge <Highlighter action="underline" color="#10b981" strokeWidth={2}>Link</Highlighter> komponenten til at navigere til en side.
        </p>
        <CodeBlock
          code={`import { Link } from "react-router";

export default function App() {
  return (
    <div>
      <Link to="/about">About</Link>
    </div>
  );
}`}
        />
        <p>
          Og det her fungere, så når man er inde på <Markdown>/</Markdown> vil <Markdown>Home</Markdown> vil den have en blå farve og fed skrift i stedet for den normale farve og skrift.
        </p>
        <CodeBlock
          code={`import { NavLink } from "react-router";

export default function App() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
    </div>
  );
}`}
        />

        <p>
          Derudover kan du også bruge <Highlighter action="underline" color="#10b981" strokeWidth={2}>useNavigate</Highlighter> hooken til at navigere til en side.
        </p>
        <CodeBlock
          code={`import { useNavigate } from "react-router";

export default function App() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}`}
        />
        <p>
          Og det her fungere, så når man klikker på <Markdown>Home</Markdown> vil man blive navigeret til <Markdown>/</Markdown>.
        </p>

        <p data-gap-block>
          Har du brug for yderligere hjælp, kan du udforske React Router's officielle dokumentation{" "}
          <a 
            href="https://reactrouter.com/en/main" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Link til React Router officielle dokumentation"
            tabIndex={0}
          >
            her
          </a>, eller tjek deres API reference{" "}
          <a 
            href="https://reactrouter.com/start/declarative/installation" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Link til React Router API reference"
            tabIndex={0}
          >
            her
          </a>.
        </p>
      </Section>
    </>
  )
}