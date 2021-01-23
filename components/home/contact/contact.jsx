import React from "react";
import GoogleMap from "./map";
import MarkdownIt from 'markdown-it';

const Contact = ({contact}) => {
  const md = MarkdownIt();

  return (
    <div className=" flex contact">
      <div className="contact__img-container">
        <img src="../images/piwnica.webp" />
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
                <GoogleMap />
              </div>
            </div>
          </div>
          <div className="flex buttons">
            <button className="btn-contact">Wyznacz trase</button>
            <button className="btn-contact">Menu</button>
            <button className="btn-contact">Zadzwoń teraz!</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
