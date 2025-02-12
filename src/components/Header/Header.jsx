import CVDownload from "../DownloadCVButton/CVDownload";

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

  return (
    <header
      className="flex justify-between items-center py-4 container text-black relative top-0 left-0"
      id="header"
    >
      <h1 className="uppercase font-semibold text-2xl">SAKDA</h1>
      <nav className="flex">
        <ul className="md:flex justify-between hidden gap-4">
          {HEADER_MENU_ITEMS.map((item, index) => (
            <li className="flex items-center font-semibold text-lg" key={index}>
              <a
                className="hover:text-red-500"
                href={`#${item.id}`}
                onClick={(e) => handleScroll(e, item.id)}
              >
                {item.title}
              </a>
            </li>
          ))}
          <li className="flex items-center">
            <CVDownload />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
