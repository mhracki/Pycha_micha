import React from "react";

const News = (props) => {
  const { title,
    description,
    date,
    img } = props;

  return (
    <div className="flex news" key={title}>
      <div className="news__wrapper">
        <div className="news__wrapper-img">
          {img && <img src={img} alt={title} />}
        </div>
        <div className="news__text flex">{title}</div>
      </div>
    </div>
  );
};
export default News;
