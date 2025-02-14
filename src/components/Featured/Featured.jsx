import TextContent from "../TextContent/TextContent";
import ImageGrid from "../Img-grid/ImageGrid";

const FEATURE__DATA = [
  {
    subtitle: "Featured Project",
    title: "CHIN SAKDA",
    description:
      "Some Project I have build through out my journey to becoming a professional Front-End Developer.",
  },
];

const Featured = () => {
  const { subtitle, title, description } = FEATURE__DATA[0];
  return (
    <>
      <section className="featured container" id="featured">
        <div className="container">
          <TextContent title={"Featured"} />
        </div>
        <div className="p-4"></div>
        <div className="featured__content container flex">
          <div className="">
            <h3 className="featured__subtitle text-indigo-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light">
              {subtitle}
            </h3>
            <div className="p-2"></div>
            <h2 className="featured__title text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-4">
              {title}
            </h2>
            <p className="featured__description w-[60ch] text-[0.5rem] sm:text-xs md:text-sm lg:text-base xl:text-lg">
              {description}
            </p>
          </div>
        </div>
        <div className="p-4"></div>
        <div className="featured__details container flex flex-col md:flex-row gap-4 md:gap-0 w-full justify-between">
          <div>
            <h4 className="text-lg md:text-xl">Tech Stack</h4>
            <ul className="text-base md:text-lg text-slate-400 mt-2">
              <li>TailwindCSS</li>
              <li>ReactJS</li>
              <li>PlaceHolder</li>
              <li>PlaceHolder</li>
              <li>PlaceHolder</li>
              <li>PlaceHolder</li>
              <li>PlaceHolder</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl">Project Type</h4>
            <ul className="text-lg text-slate-400 mt-2">
              <li>Fullstack Jamstack</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl">Time Line</h4>
            <ul className="text-lg text-slate-400 mt-2">
              <li>December 2024 - Present</li>
            </ul>
          </div>
        </div>
        <div className="p-4"></div>
        <div>
          <ImageGrid />
        </div>
      </section>
    </>
  );
};

export default Featured;
