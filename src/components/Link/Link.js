import "./Link.css";
import { useRef } from "react";

const Link = (props) => {
  const link = useRef();

  const addClass = (e) => {
    const links = Array.from(document.querySelectorAll(".sidebar .link"));
    links.forEach((link) => {
      link.classList.remove("active");
    });
    link.current.classList.add("active");
  };

  return (
    <div className={"link " + props.active} ref={link} onClick={addClass}>
      <span>{props.icon}</span>
      <a href={"#" + props.name}>{props.name}</a>
    </div>
  );
};

export default Link;
