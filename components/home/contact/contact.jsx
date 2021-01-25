import React from "react";
import MarkdownIt from 'markdown-it';
import Image from "next/image";
import GoogleMap from "./map";
import LazyLoad from 'react-lazyload';
import Link from 'next/link'


// const GoogleMap  = lazy(() => import('./map'));
const Contact = ({contact}) => {
  const md = MarkdownIt();

  return (
    <div id="contact" className=" flex contact">
      <div className="contact__img-container">
        <Image src="/images/piwnica.webp" layout='fill' objectFit="cover" />

      </div>
      <div className="contact__container">
        <div className="contact__header"/>
        <div className="contact__wrapper">
          <hr className="line" />
          <div className="contact__wrapper-content">

            <div className="address">
              <div className="contact__header-mobile">Kontakt </div>
              <hr className="line-mobile" />
              <div className="address__wrap">
                <b>Adres:</b>
                <div dangerouslySetInnerHTML={{__html:md.render(contact.Address)}}/>
                <br/>
                <br/>
                <b>Godziny pracy:</b>
                <div dangerouslySetInnerHTML={{__html:md.render(contact.Opening_hours)}}/>
                <div className="flex buttons mobile">
                  <button className="btn-contact">Zadzwoń teraz!</button>
                </div>
              </div>
            </div>
            <div className="flex buttons mobile">
                  <button className="btn-contact">Wyznacz trasę</button>
            </div>
            <div className="map">
              <div className="map__wrapper">
                <LazyLoad>
                <GoogleMap />

                </LazyLoad>
              </div>
            </div>
          </div>
          <div className="flex buttons">
            <button className="btn-contact"><a href="https://www.google.com/maps/dir//Pycha+Micha+Restauracja/@49.7491469,18.5598714,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x471405a5858eef9f:0x7b70b0a47cc02a2c!2m2!1d18.629911!2d49.749168">Wyznacz trase</a></button>
            <button className="btn-contact"><Link href="/menu">
              <a>Menu</a>
            </Link></button>
            <button className="btn-contact"><Link href="tel:+48-33-852-12-12">Zadzwoń teraz!</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
