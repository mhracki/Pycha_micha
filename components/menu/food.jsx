import Link from "next/link";
import React from "react";

const Food = (props) => {
  const { description, name, price } = props;
  return (
    <div className="flex food">
      <div className="food__text">
        <div className="food__text__title flex">{name}</div>
        <div className="food__text__description flex">{description}</div>
      </div>
      <div className="food__price flex">{price} zł</div>
    </div>
  );
};
export default Food;
