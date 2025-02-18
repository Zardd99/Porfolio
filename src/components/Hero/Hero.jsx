import CVDownload from "../DownloadCVButton/CVDownload";

const HERO__CONTENT = [
  {
    subtitle: "Junior Developer | Responsive Web",
    title: "Welcome to my",
    title2: " Portfolio",
    description:
      "Front-End Developer with a passion for designing and developing responsive websites. I specialize in HTML, CSS, JavaScript, and React. ",
    description2:
      "This Website is designed using React Framework and TailwindCSS version 4",
    button: "Download CV",
  },
];

const Hero = () => {
  const { subtitle, title, title2, description, description2 } =
    HERO__CONTENT[0];

  return (
    <>
      <section
        className="hero container flex flex-col gap-8 items-center justify-center mt[50%] leading-[0.9em] text-center tracking-tighter h-[calc(100vh-90px)]   "
        id="hero"
      >
        <h2 className="hero__subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-blue-400">
          {subtitle}
        </h2>
        <h1 className="hero__title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black ">
          {title} <br /> {title2}{" "}
        </h1>
        <p className="hero__description w-[60ch] text-slate-600 text-[0.5rem] sm:text-xs md:text-sm lg:text-base xl:text-lg">
          {description} <br />
          <strong>{description2}</strong>
        </p>
        <CVDownload />
      </section>
    </>
  );
};

export default Hero;
