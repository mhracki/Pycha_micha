import Link from "next/link";
import React from "react";
import menuCategories from "../../mock-api/menu-categories";
import Food from "./food";

const FoodList = () => {
  const foodTable = [
    {
      title: "Rosół",
      description: "z makaronem",
      price: 8,
    },
    {
      title: "Czosnkula",
      description: "z boczkiem jajkiem i grzankami",
      price: 12,
    },
    {
      title: "Krem z pomidorów",
      description: "podawany z grzankami",
      price: 10,
    },
    {
      title: "Pomidorowa",
      description: "z ryżem",
      price: 8,
    },
    {
      title: "Flaki wołowe",
      description: "z chlebem",
      price: 15,
    },
  ];
  return (
    <div>
      {menuCategories.map((y) => {
        return (
          <div className="flex food-list" key={y.text}>
            <div className="food-list__category__text-container">
              <div className="food-list__category__title"> {y.text}</div>
              <div className="food-list__category__desc">
                {foodTable.map((x) => {
                  return (
                    <div>
                      <Food
                        title={x.title}
                        description={x.description}
                        price={x.price}
                      />
                      
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="food-list__img">
              <img src={y.img} alt={y.text} />
            </div>
          </div>
        );
      })}
      )
    </div>
  );
};
export default FoodList;
