import Link from "next/link";
import React from "react";
import Category from './category';
import menuCategories from '../../mock-api/menu-categories'

const CategoriesList = () => {
//   const menuCategories = [
//     {
//       img: "/images/gyros.jpg",
//       text: "zupa",
//     },
//     {
//       img: "/images/gyros.jpg",
//       text: "dania główne",
//     },
//     {
//       img: "/images/gyros.jpg",
//       text: "pierogi",
//     },
//     {
//       img: "/images/gyros.jpg",
//       text: "makarony",
//     },
//     {
//       img: "/images/gyros.jpg",
//       text: "burgery",
//     },
//     {
//       img: "/images/gyros.jpg",
//       text: "placki",
//     },
//     {
//       img: "/images/gyros.jpg",
//       text: "sałatki",
//     },
//     {
//       img: "/images/gyros.jpg",
//       text: "dla młodzianów",
//     },
//   ];
  return <div className="flex categories-list" >
      {menuCategories.map(x=>{
          return <Category img={x.img} text={x.text}/>})}
  </div>;
};
export default CategoriesList;
