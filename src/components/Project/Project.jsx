import { useEffect, useRef } from "react";
import TextContent from "../TextContent/TextContent";
import SamsungClone from "../../assets/Project7.png";
import Todo from "../../assets/Todo.png";
import MovieSite from "../../assets/Movie-site.png";

const Project = () => {
  const imageRefs = useRef([]);

  const projects = [
    {
      title: "Samsung Clone",
      description:
        "Clone Samsung Web Application using ReactJS <br /> <br /> ..On Going",
      image: SamsungClone,
      alt: "Samsung Clone App",
      link: null,
    },
    {
      title: "Todo",
      description: "Todo Web Application using ReactJS",
      image: Todo,
      alt: "Todo App",
      link: "https://todo-seven-rouge.vercel.app/",
    },
    {
      title: "Movie Site",
      description: "Movie Web Application using ReactJS",
      image: MovieSite,
      alt: "Movie Site App",
      link: "https://movie-site-mauve-one.vercel.app/",
    },
  ];

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
          {projects.map((project, index) => (
            <>
              {/* Text Section */}
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-indigo-600 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold uppercase mb-4">
                  {project.title}
                </h4>
                <p
                  className="text-slate-500 text-[0.5rem] sm:text-xs md:text-sm lg:text-base xl:text-lg font-light tracking-tighter leading-[0.9rem] text-center"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              </div>

              {/* Image Section */}
              <div className="flex flex-col items-center justify-center">
                <img
                  ref={(el) => (imageRefs.current[index] = el)}
                  className="object-cover rounded-2xl opacity-0 transform transition duration-1000 ease-in-out hover:cursor-pointer"
                  src={project.image}
                  alt={project.alt}
                  onClick={() => project.link && window.open(project.link)}
                />
              </div>
            </>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Project;
