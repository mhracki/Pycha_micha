import Link from "next/link";
import React from "react";
import MarkdownIt from 'markdown-it';

const MainHeader = ({slogan}) => {
  const md = MarkdownIt();

  return (
    <div className="flex">
      <div className="wrapper">
        <img className="main-photo" src="/images/burger1.webp" />
        <div className="slogan" >
          <div className="slogan-text" dangerouslySetInnerHTML={{__html:md.render(slogan.slogan)}}/>
          <div className="button">
            <Link href="/menu">
              <a>Menu</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainHeader;
