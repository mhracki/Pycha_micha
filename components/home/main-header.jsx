import Link from "next/link";
import React from "react";

const MainHeader = () => {
  return (
    <div className="flex">
      <div className="wrapper">
        <img className="main-photo" src="/images/burger1.webp" />
        <div className="slogan">
          Gorące smaczne
          <br />
          jedzenie
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
