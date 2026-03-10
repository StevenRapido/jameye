import { useRef } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { SectionEdge } from "./components/SectionEdge";
import { SectionLevels } from "./components/SectionLevels";
import { SectionTournaments } from "./components/SectionTournaments";
import { SectionEmail } from "./components/SectionEmail";
import { Footer } from "./components/Footer";

function App() {
  const emailRef = useRef(null);

  return (
    <>
      <Nav />
      <Hero emailRef={emailRef} />
      <SectionEdge />
      <SectionLevels />
      <SectionTournaments />
      <SectionEmail emailRef={emailRef} />
      <Footer />
    </>
  );
}

export default App;
