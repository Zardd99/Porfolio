import CVDownload from "../DownloadCVButton/CVDownload";
import { useState, useEffect } from "react";

const HEADER_MENU_ITEMS = [
  {
    id: "hero",
    title: "About",
  },
  {
    id: "featured",
    title: "Feature",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "projects",
    title: "Go See Projects",
  },
];

const Header = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    const offset = 90;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  return (
    <header
      className="flex justify-between items-center py-4 container relative top-0 left-0"
      id="header"
    >
      <h1 className="uppercase font-semibold text-2xl">ASTA</h1>
      <nav className="flex">
        <ul className="md:flex justify-between items-center hidden gap-4">
          {HEADER_MENU_ITEMS.map((item, index) => (
            <li className="flex items-center font-semibold text-lg" key={index}>
              <a
                className="hover:text-red-500 text-dark dark:text-light"
                href={`#${item.id}`}
                onClick={(e) => handleScroll(e, item.id)}
              >
                {item.title}
              </a>
            </li>
          ))}
          <hr className="border h-1/2" />
          <li className="flex items-center justify-center">
            <button onClick={toggleDarkMode}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            </button>
          </li>
          <li className="flex items-center">
            <CVDownload />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
