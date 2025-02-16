const BUTTON_TEXT = "Download CV";
const CVDownload = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./CV_resume.pdf";
    link.download = "CV_resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <a
      className="hero__button font-semibold bg-blue-500 p-4 rounded-4xl text-white text-xs sm:text-sm md:text-base hover:bg-blue-400 hover:scale-105 transition-transform duration-300 ease-in-out"
      href="#hero"
      onClick={handleDownload}
    >
      {BUTTON_TEXT}
    </a>
  );
};

export default CVDownload;
