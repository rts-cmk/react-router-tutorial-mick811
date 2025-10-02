import Section from "../components/section";
import CodeBlock from "../components/code-block";
import Highlighter from "../components/highlightText";

export default function Home() {
  return (
    <>
      <Section title={"React Router Guide (Declarative Routing)"}>
        <p>
          React Router er et populært bibliotek til at håndtere routing i React applikationer. Det er et kraftigt værktøj, der giver dig mulighed for at håndtere routing på en meget fleksibel og effektiv måde.
        </p>
      </Section>
      <Section title={"Installation"}>
        <p>
          Du kan nemt oprette et nyt Vite projekt med React Router inkluderet ved at køre denne kommando i din terminal. Dette vælger automatisk React som template, og JavaScript som standard.
        </p>
        <CodeBlock
          language={"javascript"}
          code={
            `npm create vite@latest app -- --template react`
          }
        />
        <p>
          Herefter skal du installere alle dependencies ved at køre kommandoerne i din terminal. En dependency er et eksternt bibliotek, som din applikation bruger til at implementere specifikke løsninger, f.eks. React Router.
        </p>
        <CodeBlock
          language={"javascript"}
          code={
            `npm i react-router`
          }
        />
        <p>
          Denne dependency er nødvendig for at kunne bruge de komponenter, som React Router tilbyder, såsom{" "}
          {["<Link />", "<NavLink />", "<Outlet />"].map((component, index) => (
            <span key={index}>
              <Highlighter action="underline" color={"#000"} strokeWidth={3}>
                {component}
              </Highlighter>
              {index < 2 ? ", " : " og"}
            </span>
          ))}
          <Highlighter action="underline" color={"#000"} strokeWidth={3}>
            {`useNavigate()`}
          </Highlighter>
          .
        </p>
      </Section>
    </>
  )
}