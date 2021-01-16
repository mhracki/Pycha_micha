import React from "react";
import GoogleMap from "./map"

const Contact = () => {
  return (
    <div className=" flex contact">
      <div className="contact__img-container">
        <img src="../images/piwnica.jpg" />
      </div>
      <div className="contact__container">
        <div className="contact__header">Kontakt</div>
        <div className="contact__wrapper">
        <hr className="line"/>
          <div className="contact__wrapper-content">
            <div className="address">
              Adres: <br />
              ul.Głęboka 29 <br />
              43-400 Cieszyn <br />
              tel: +48 123 456 789 <br />
              <br />
              <br />
              <b>Godziny pracy</b>
              <br />
              pon.: 11:00–18:00
              <br />
              wt.: 11:00–18:00
              <br />
              śr.: 11:00–18:00
              <br />
              czw.: 11:00–18:00
              <br />
              pt.: 11:00–19:00
              <br />
              sob.: 11:00–19:00
              <br />
              niedz.: 11:00–18:00
              <br />
              <br />
            </div>
            <div className="map">
              <div className="map__wrapper">
                <GoogleMap/>
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
