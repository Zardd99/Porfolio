import CVDownload from "./CVDownload";

const HERO__CONTENT = [
  {
    subtitle: "Junior Developer | Responsive Web",
    title: "Welcome to my",
    title2: " Portfolio",
    description:
      "Front-End Developer passionate about crafting responsive web experiences.",
    highlight: "Specializing in:",
    skills: "React · TypeScript · Tailwind CSS · JavaScript · HTML/CSS",
    description2: "Built with Vite + React + Tailwind CSS v4",
  },
];

const Hero = () => {
  const {
    subtitle,
    title,
    title2,
    description,
    highlight,
    skills,
    description2,
  } = HERO__CONTENT[0];

  return (
    <section
      className="hero container flex flex-col items-center justify-center min-h-[calc(100vh-90px)] py-12 px-4 sm:px-6 lg:px-8 text-center"
      id="hero"
    >
      <div className="max-w-4xl space-y-6 md:space-y-8">
        <div className="inline-block relative group">
          <span className="hero__subtitle text-lg md:text-xl lg:text-2xl font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {subtitle}
          </span>
          <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-500 group-hover:w-full" />
        </div>

        <h1 className="hero__title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
          {title}
          <span className="block mt-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {title2}
          </span>
        </h1>

        <div className="space-y-4">
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col items-center space-y-2">
            <span className="text-gray-400 text-sm font-medium">
              {highlight}
            </span>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.split(" · ").map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs sm:text-sm bg-gray-800 rounded-full text-cyan-300 border border-gray-700 hover:border-cyan-400 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <p className="text-gray-400 text-xs sm:text-sm mt-4">
            {description2}
          </p>
        </div>

        <div className="pt-6 animate-fade-in-up">
          <CVDownload className="inline-block px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/20" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
