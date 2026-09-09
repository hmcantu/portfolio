import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <main id="home">
        <Hero />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
