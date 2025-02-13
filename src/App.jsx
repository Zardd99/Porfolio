import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Featured from "./components/Featured/Featured";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <div className="flex flex-col ml-auto mr-auto items-center md:sticky top-0 z-[9999] bg-slate-300">
        <Header />
      </div>
      <div className="flex flex-col ml-auto mr-auto items-center">
        <Hero />
        <Featured />
        <Project />
        <Contact />
      </div>
    </>
  );
};

export default App;
