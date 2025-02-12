import img from "../../assets/Feature.jpg";
import project1 from "../../assets/project1.png";

const images = [project1, img, project1, img];

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((src, index) => (
        <div
          className="border rounded-2xl flex items-center justify-center"
          key={index}
        >
          <img className="rounded-2xl object-cover" src={src} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
