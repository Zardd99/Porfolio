import "./ImageGrid.css";

import { useEffect, useRef } from "react";
// import img from "../../assets/Feature.jpg";
import project1 from "../../assets/Project2.webp";
import project2 from "../../assets/Feature.jpg";
// import project3 from "../../assets/Project3.webp";
// import project4 from "../../assets/Project4.jpeg";
// import project5 from "../../assets/Project5.png";
// import project6 from "../../assets/Project6.png";
// import project7 from "../../assets/Project7.png";

const images = [
  project1,
  project2,
  // project3,
  // project4,
  // project5,
  // project6,
  // project7,
  // img,
];
const links = [
  {
    link: "",
    title: "Samsung Clones",
  },
  {
    link: "https://todo-seven-rouge.vercel.app/",
    title: "Todo List",
  },
];

const ImageGrid = () => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {images.map((src, index) => (
        <div
          ref={(el) => (imageRefs.current[index] = el)}
          className="rounded-xl flex items-center justify-center relative overflow-hidden p-4 opacity-0 transform transition duration-1000 ease-in-out"
          key={index}
        >
          <img
            className="rounded-2xl object-cover w-full h-full"
            src={src}
            alt={`Project ${index + 1}`}
          />
          <div
            className="absolute inset-0 bg-[rgba(152,56,65,0.4)] transition duration-300 ease-in-out hover:bg-[rgba(152,56,65,0.1)] hover:cursor-pointer"
            onClick={() => window.open(links[index]?.link)}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
