import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <main id="home">
        <Hero />
        <Projects />
      </main>
    </>
  );
}
