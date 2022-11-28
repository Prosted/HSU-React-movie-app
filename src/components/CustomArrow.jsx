import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <MdArrowForwardIos
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
      color="white"
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <MdArrowBackIos
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
      color="white"
    />
  );
}

export { NextArrow, PrevArrow };
