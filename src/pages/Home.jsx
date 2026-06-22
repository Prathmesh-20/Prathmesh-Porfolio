import Hero from "../components/pages/Hero";
import About from "../components/pages/About";
import Projects from "../components/pages/Projects";
import Contact from "../components/pages/Contact";
import FindMeOnline from "../components/pages/FindMeOnline";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <FindMeOnline />
    </>
  );
};

export default Home;