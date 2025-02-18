import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Featured from "./components/Featured/Featured";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <div className="bg-light text-dark dark:bg-dark dark:text-light">
        <div className="flex flex-col ml-auto mr-auto items-center md:sticky top-0 z-[9999] bg-light text-dark dark:bg-dark dark:text-light">
          <Header />
        </div>
        <main className="bg-light text-dark dark:bg-dark dark:text-light">
          <div className="flex flex-col ml-auto mr-auto items-center ">
            <Hero />
            <div className="p-10"></div>
            <Featured />
            <div className="p-10"></div>
            <Project />
            <div className="p-10"></div>
            <Contact />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
