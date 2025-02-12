import PropTypes from "prop-types";

const TEXTCONTENT__TEXT = [
  {
    title: "Featured",
  },
  {
    title: "Contact",
  },
];

const TextContent = ({ index }) => {
  const { title } = TEXTCONTENT__TEXT[index];
  return (
    <div>
      <div className="p-4"></div>
      <div className="text-center">
        <h2 className="text-6xl font-bold leading-0.5 tracking-tighter">
          {title}
        </h2>
      </div>
    </div>
  );
};

TextContent.propTypes = {
  index: PropTypes.number.isRequired,
};

export default TextContent;
