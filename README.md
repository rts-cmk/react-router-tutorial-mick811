# Opgave: Lav en tutorial om React Router

## Formål
Du skal lave en pædagogisk og teknisk korrekt tutorial, der viser hvordan man bruger [React Router](https://reactrouter.com/) til at navigere mellem sider i en React-applikation. Målet er at formidle din viden, så andre elever eller udviklere kan lære af din vejledning.

## Læringsmål
- Forstå og anvende React Router til routing i en [SPA (Single Page Application)](https://reactrouter.com/en/main/start/tutorial)
- Forklare centrale begreber som [`<BrowserRouter>`](https://reactrouter.com/en/main/router-components/browser-router), [`<Routes>`](https://reactrouter.com/en/main/router-components/routes), [`<Route>`](https://reactrouter.com/en/main/router-components/route), og [`useNavigate`](https://reactrouter.com/en/main/hooks/use-navigate)
- Demonstrere hvordan man opretter og strukturerer flere sider i en React-app
- Kommunikere teknisk viden klart og målrettet
- Publicere en fungerende tutorial online

## Opgavekrav
Du skal:

1. **Introducere React Router**  
   Forklar kort hvad React Router er, og hvorfor det bruges i moderne webapps.

2. **Installere og konfigurere**  
   Vis hvordan man installerer React Router via `npm` eller `yarn` og sætter det op i en React-app med [`<BrowserRouter>`](https://reactrouter.com/en/main/router-components/browser-router).

3. **Oprette flere sider**  
   Lav mindst tre komponenter (f.eks. Home, About, Contact) og vis hvordan de routes med [`<Route>`](https://reactrouter.com/en/main/router-components/route) og [`<Routes>`](https://reactrouter.com/en/main/router-components/routes).

4. **Navigering**  
   Demonstrer brugen af [`<Link>`](https://reactrouter.com/en/main/components/link) og [`useNavigate`](https://reactrouter.com/en/main/hooks/use-navigate) til at skifte mellem sider.

5. **Fejlhåndtering og 404-side**  
   Vis hvordan man håndterer ukendte routes med en fallback-side, typisk ved at bruge en `*`-route i [`<Route>`](https://reactrouter.com/en/main/router-components/route).

6. **Publicering**  
   Din tutorial skal være tilgængelig online via [GitHub Pages](https://docs.github.com/en/pages), [Vercel](https://vercel.com/docs), [Netlify](https://docs.netlify.com/) eller tilsvarende. Link til den færdige tutorial skal afleveres sammen med opgaven.

7. **Tutorial-format**  
   Du vælger selv format:
   - Video (maks 5 min)
   - Skriftlig guide med kodeeksempler og screenshots

## Evalueringskriterier
- Klar og korrekt teknisk forklaring
- Brug af relevante React Router-komponenter
- Struktur og layout af tutorial
- Evne til at formidle til målgruppen (andre elever)
- Fungerende og tilgængelig publicering online

---

# React Router Tutorials

Dette repository indeholder to komplette tutorials om React Router v7:

## 📁 [demo/](./demo) - Framework Mode

**Framework Mode** er React Router's moderne full-stack løsning med:
- ✅ Konfigurationsbaseret routing (`routes.js`)
- ✅ Indbygget Server-Side Rendering (SSR)
- ✅ Data loading med `loader` functions
- ✅ Form actions med `action` functions
- ✅ Type safety med auto-genererede types
- ✅ Best for full-stack applikationer

**Kom i gang:**
```bash
cd demo
npm install
npm run dev
```

[📖 Læs Framework Mode Tutorial →](./demo/README.md)

## 📁 [demo-declarative/](./demo-declarative) - Declarative Mode

**Declarative Mode** er den klassiske React Router tilgang med:
- ✅ JSX-baseret routing (`<Routes>`, `<Route>`)
- ✅ Simpel og let at lære
- ✅ Perfekt til client-side SPAs
- ✅ Fuld kontrol i komponenter
- ✅ Best for traditionelle React apps

**Kom i gang:**
```bash
cd demo-declarative
npm install
npm run dev
```

[📖 Læs Declarative Mode Tutorial →](./demo-declarative/README.md)

## Hvilken skal du vælge?

| Brug Framework Mode hvis du... | Brug Declarative Mode hvis du... |
|--------------------------------|----------------------------------|
| Bygger en full-stack app | Bygger en client-side SPA |
| Har brug for SSR | Kun skal bruge client-side routing |
| Vil have data loading features | Foretrækker enkle hooks og state |
| Arbejder med forms og mutations | Vil have maksimal kontrol |
| Bygger en større applikation | Bygger noget simpelt og hurtigt |

## Ressourcer

- [React Router Officiel Dokumentation](https://reactrouter.com)
- [Framework Mode Docs](https://reactrouter.com/start/framework/installation)
- [Declarative Mode Docs](https://reactrouter.com/start/declarative/installation)