import img from "../../assets/Feature.jpg";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.webp";
import project3 from "../../assets/project3.webp";
import project4 from "../../assets/project4.jpeg";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";
import project7 from "../../assets/project7.png";

const images = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  img,
];

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {images.map((src, index) => (
        <div
          className="rounded-xl flex items-center justify-center relative overflow-hidden p-4"
          key={index}
        >
          <img
            className="rounded-2xl object-cover w-full h-full"
            src={src}
            alt={`Project ${index + 1}`}
          />
          <div className="absolute inset-0 bg-[rgba(152,56,65,0.4)] transition duration-300 ease-in-out hover:bg-[rgba(152,56,65,0.1)]"></div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
