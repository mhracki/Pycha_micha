import React from "react";

const News = (props) => {
  const { title,
    description,
    date,
    img } = props;

  return (
    <div className="news" key={title}>
      <div className="news__wrapper">
        <div className="news__wrapper-img">
          <img src={img ? img : '/images/logo.svg'} alt={title} />
        </div>
        <div className="news__date flex">Opublikowano: {date}</div>
        <div className="news__text flex">{title}</div>
        <div className="news__desc flex">{description}</div>


      </div>
    </div>
  );
};
export default News;
