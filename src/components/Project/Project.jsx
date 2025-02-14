import { useEffect, useRef } from "react";
import TextContent from "../TextContent/TextContent";
import img from "../../assets/Project2.webp";
import img2 from "../../assets/Feature.jpg";

const Project = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
          } else {
            entry.target.classList.remove("slide-in");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    imageRefs.current.forEach((image) => {
      if (image) observer.observe(image);
    });

    return () => {
      imageRefs.current.forEach((image) => {
        if (image) observer.unobserve(image);
      });
    };
  }, []);

  return (
    <div>
      <section className="project container" id="project">
        <TextContent title={"Project"} />
        <div className="p-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Row */}
          <div className="flex flex-col items-center justify-center order-1 md:order-none">
            <h4 className="text-slate-600 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold uppercase mb-4">
              Samsung Clone
            </h4>
            <p className="text-slate-500 text-[0.5rem] sm:text-xs md:text-sm lg:text-base xl:text-lg font-light tracking-tighter leading-[0.9rem] text-center">
              Clone Samsung Web Application using ReactJS
            </p>
          </div>
          <div className="flex flex-col items-center justify-center order-2 md:order-none">
            <img
              ref={(el) => (imageRefs.current[0] = el)}
              className="object-cover rounded-2xl opacity-0 transform transition duration-1000 ease-in-out"
              src={img}
              alt="Todo App"
            />
          </div>
          {/* Second Row */}
          <div className="flex flex-col items-center justify-center order-4 md:order-none">
            <img
              ref={(el) => (imageRefs.current[1] = el)}
              className="object-cover rounded-2xl opacity-0 transform transition duration-1000 ease-in-out"
              src={img2}
              alt="Calculator App"
            />
          </div>
          <div className="flex flex-col items-center justify-center order-3 md:order-none">
            <h4 className="text-slate-600 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold uppercase mb-4">
              Calculator App
            </h4>
            <p className="text-slate-500 text-[0.5rem] sm:text-xs md:text-sm lg:text-base xl:text-lg font-light tracking-tighter leading-[0.9rem] text-center">
              Calculator Web Application using ReactJS
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
