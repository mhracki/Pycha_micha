import React from "react";
import MarkdownIt from 'markdown-it';
import Image from 'next/image'

const AboutUs = ({aboutUs}) => {
  const md = MarkdownIt();

  return (
    <div className=" flex about-us">
      <div className="about-us__img-container">
        <Image src="/images/about-us1.webp" layout='fill' objectFit="cover" />
      </div>
      <div className="about-us__text">
        <div className="about-us__text__title">O nas</div>
        <div className="about-us__text__description" dangerouslySetInnerHTML={{__html: md.render(aboutUs.About_us)}}/>
      </div>
    </div>
  );
};
export default AboutUs;
