import React from "react";

const AboutUs = () => {
  return (
    <div className=" flex about-us">
      <div className="about-us__img-container">
        <img src="../images/about-us.webp" />
      </div>
      <div className="about-us__text">
        <div className="about-us__text__title">O nas</div>
        <div className="about-us__text__description">
          Pycha Micha w centralnym miejscu ulicy Głębokiej w Cieszyńskiej
          kamienicy z XVIII wieku, stworzyliśmy to ciepłe i niezobowiązujące
          miejsce, w którym delikatna i lekka kuchnia polska codziennie
          zaskakuje nowymi specjałami.
          <br />
          <br />
          Nasze posiłki są sporządzane są tylko ze świeżych i sprawdzonych
          produktów od lokalnych dostawców co nadaje im niepowtarzalny smak.
          Posiadamy zarówno stałą kartę, jak również menu sezonowe i promocyjne
          pozycje na każdy dzień tygodnia. Zapraszamy do zapoznania się z naszym
          menu.
          <br />
          <br />
          Dodatkową atrakcją będzie namalowany we wnętrzu lokalu mural
          przedstawiający Cieszyn z XVIII wieku. W naszej piwnicy możecie napić się piwa z lokalnego browaru
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
