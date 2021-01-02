import Link from "next/link";
import React from "react";

const Category = (props) => {
  const { text, img } = props;
  return (
    <div className="flex category" key={text}>
      <div className="category__wrapper">
        <div className="category__wrapper-img">
          <img src={img} alt={text} />
        </div>
        <hr />
        <div className="category__text flex">{text}</div>
      </div>
    </div>
  );
};
export default Category;
