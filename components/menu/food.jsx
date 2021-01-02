import Link from "next/link";
import React from "react";

const Food = (props) => {
  const { description, title, price,text } = props;
  return (
    <div className="flex food">
      <div className="food__text">
        <div className="food__text__title flex">{title}</div>
        <div className="food__text__description flex">{description}</div>
      </div>
      <div className="food__price flex">{price},00 zł</div>
    </div>
  );
};
export default Food;
