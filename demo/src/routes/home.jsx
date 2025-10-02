import { Markdown, CodeBlock } from "../components/code-block";
import Section from "../components/section";
import Highlighter from "../components/highlightText";

export default function Home() {
  return (
    <>
      <Section title={"React Router Guide"}>
        <p>
          <strong>React Router</strong> er en populær biblioteks-løsning til at håndtere navigation og routing i React-applikationer.
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
          code="npm create vite@latest min-router-app -- --template react"
        />
        <p>
          Hvad det egentlig betyder, er at vi opretter en Vite applikation med React som template, og JavaScript som standard.
        </p>
      </Section>
    </>
  )
}