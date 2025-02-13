import TextContent from "../TextContent/TextContent";
import img from "../../assets/Project1.png";
import img2 from "../../assets/Feature.jpg";

const Project = () => {
  return (
    <div>
      <section className="project container" id="project">
        <TextContent title={"Project"} />
        <div className="p-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Row */}
          <div className="flex flex-col items-center justify-center order-1 md:order-none">
            <h4 className="text-slate-600 text-3xl font-semibold uppercase mb-4">
              Samsung Clone
            </h4>
            <p className="text-slate-500 text-xl font-light tracking-tighter leading-[0.9rem]">
              Clone Samsung Web Application using ReactJS
            </p>
          </div>
          <div className="flex flex-col items-center justify-center order-2 md:order-none">
            <img
              className="object-cover rounded-2xl"
              src={img}
              alt="Todo App"
            />
          </div>

          {/* Second Row */}
          <div className="flex flex-col items-center justify-center order-4 md:order-none">
            <img
              className="object-cover rounded-2xl"
              src={img2}
              alt="Calculator App"
            />
          </div>
          <div className="flex flex-col items-center justify-center order-3 md:order-none">
            <h4 className="text-slate-600 text-3xl font-semibold uppercase mb-4">
              Calculator App
            </h4>
            <p className="text-slate-500 text-xl font-light tracking-tighter leading-[0.9rem]">
              Calculator Web Application using ReactJS
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
