import { useRouter } from "next/router";
import React from "react";
import { getMedia } from "../../../api/media";
import { convertId } from "../../../helpers/convert-string-to-id";

const Category = (props) => {
  const { name, img } = props;
  const router = useRouter();

  const handleRedirect = () => {
    router.push(
      { pathname: "/menu", query: { message: convertId(name) } },
      "menu"
    );
  };

  return (
    <div onClick={handleRedirect} className="flex category" key={name}>
      <div className="category__wrapper">
        <div className="category__wrapper-img">
          {img && <img src={getMedia(img)} alt={name} />}
        </div>
        <hr />
        <div className="category__text flex">{name}</div>
      </div>
    </div>
  );
};
export default Category;
