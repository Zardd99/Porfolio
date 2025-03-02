import Header from "./components/Header";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className=" bg-light text-dark dark:bg-dark dark:text-light flex flex-col items-center justify-center ">
        <div className="flex container ml-auto mr-auto items-center md:sticky top-0 z-[9999] bg-light text-dark dark:bg-dark dark:text-light">
          <Header />
        </div>
        <main className="bg-light text-dark dark:bg-dark dark:text-light">
          <div className="flex flex-col ml-auto mr-auto items-center overflow-hidden">
            <Hero />
            <div className="p-10"></div>
            <Featured />
            <div className="p-10"></div>
            <Project />
            <div className="p-10"></div>
            <Contact />
          </div>
        </main>
        <footer className="w-[30%]">
          <div className="p-10"></div>
          <Footer />
        </footer>
        <div className="p-10"></div>
      </div>
    </>
  );
};

export default App;
