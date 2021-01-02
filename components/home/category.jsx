//import Link from "next/link";
import { Link, animateScroll as scroll } from "react-scroll";
import React from "react";

const Category = (props) => {
  const { text, img } = props;
  return (
    <Link activeClass="active"
    to={`/menu#${text}`}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500} >
 
    <div className="flex category" key={text}>
      <div className="category__wrapper">
        <div className="category__wrapper-img">
          <img src={img} alt={text} />
        </div>
        <hr />
        <div className="category__text flex">{text}</div>
      </div>
    </div>
  </Link>
  );
};
export default Category;
