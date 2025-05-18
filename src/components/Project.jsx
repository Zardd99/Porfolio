import "./css/Project.css";

import { useEffect, useRef } from "react";
import SamsungClone from "../assets/Project7.png";
import Todo from "../assets/Todo.png";
import MovieSite from "../assets/Movie-site.png";
import FinalExam from "../assets/FinalExam.png";
import Restaurant from "../assets/Restaurant_Website.png";

const ProjectCard = ({ project, index, textRefs, imageRefs }) => {
  const descriptionLines = project.description.split("\n");

  return (
    <article className="group relative flex flex-col items-center gap-4 w-full">
      <div
        ref={(el) => (textRefs.current[index] = el)}
        className="opacity-0 transition-all duration-700 ease-out translate-y-8 text-center w-full h-25"
      >
        <h3 className="text-xl font-bold text-indigo-600 mb-2 sm:text-2xl lg:text-3xl">
          {project.title}
        </h3>
        <div className="text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2">
          {descriptionLines.map((line, i) => (
            <p key={i} className="text-xs sm:text-sm md:text-base">
              {line}
            </p>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-xl shadow-lg w-full sm:rounded-2xl">
        <img
          ref={(el) => (imageRefs.current[index] = el)}
          src={project.image}
          alt={project.alt}
          onClick={() => project.link && window.open(project.link)}
          className="opacity-0 transition-all duration-700 ease-out translate-y-8 object-cover w-full h-full sm:h-56 md:h-64 lg:h-72 xl:h-80 cursor-pointer group-hover:scale-105 active:scale-95 hover:shadow-xl"
          role={project.link ? "button" : undefined}
        />
        {!project.link && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-bold text-sm sm:text-lg">
              Coming Soon
            </span>
          </div>
        )}
      </div>
    </article>
  );
};

const Project = () => {
  const textRefs = useRef([]);
  const imageRefs = useRef([]);

  const projects = [
    {
      title: "Samsung Clone",
      description: "Clone Samsung Web Application using ReactJS\n\n..On Going",
      image: SamsungClone,
      alt: "Samsung Clone App Preview",
      link: null,
    },
    {
      title: "Todo App",
      description: "Feature-rich Todo Web Application built with ReactJS",
      image: Todo,
      alt: "Todo Application Preview",
      link: "https://todo-seven-rouge.vercel.app/",
    },
    {
      title: "Movie Database",
      description:
        "Responsive Movie Web Application using ReactJS and TMDB API",
      image: MovieSite,
      alt: "Movie Database Preview",
      link: "https://movie-site-mauve-one.vercel.app/",
    },
    {
      title: "Final Exam at Instinct Institute",
      description: "Feature TailwindCSS Version 4 ,ReactJS and VITE",
      image: FinalExam,
      alt: "Final Exam Preview",
      link: "https://project-final-exam.vercel.app/",
    },
    {
      title: "Restaurant Website",
      description: "Feature TailwindCSS Version 4 ,ReactJS and VITE",
      image: Restaurant,
      alt: "Restaurant Website Preview",
      link: "https://frond-end-back-end-final-project.vercel.app/",
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const allElements = [
      ...textRefs.current.filter(Boolean),
      ...imageRefs.current.filter(Boolean),
    ];

    allElements.forEach((el) => observer.observe(el));

    return () => allElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section
      className="py-12 px-4 sm:py-16 md:py-20 lg:px-8 xl:px-16"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <header className="sticky top-16 sm:top-20 z-50 bg-white dark:bg-gray-900 py-3 sm:py-4 mb-8 sm:mb-12 text-center rounded-lg shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm sm:text-base">
            Explore my latest web development projects hosted on{" "}
            <a
              href="https://vercel.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline dark:text-indigo-400 font-medium"
            >
              Vercel
            </a>
            . Tap images to view demos.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:gap-16 xl:gap-20 place-items-start">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              textRefs={textRefs}
              imageRefs={imageRefs}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

import PropTypes from "prop-types";

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  textRefs: PropTypes.shape({ current: PropTypes.arrayOf(PropTypes.object) })
    .isRequired,
  imageRefs: PropTypes.shape({ current: PropTypes.arrayOf(PropTypes.object) })
    .isRequired,
};

export default Project;
