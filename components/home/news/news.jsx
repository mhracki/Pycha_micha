import React from "react";
import MarkdownIt from 'markdown-it';


const News = (props) => {
  const { title,
    description,
    date,
    img } = props;
    const md = MarkdownIt();

  return (
    <div className="news" key={title}>
      <div className="news__wrapper">
        <div className="news__wrapper-img">
          <img src={img ? img : '/images/logo.svg'} alt={title} />
        </div>
        <div className="news__date flex" >Opublikowano: {date}</div>
        <div className="news__text flex">{title}</div>
        <div className="news__desc " dangerouslySetInnerHTML={{__html: md.render(description)}}/>


      </div>
    </div>
  );
};
export default News;
