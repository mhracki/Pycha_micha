import Link from "next/link";
import React from "react";
import menuCategories from "../../mock-api/menu-categories";
import Food from "./food";


const FoodList = ({foodList}) => {
  console.log(foodList);
  const convertedList =()=>{
    return  foodList.map( x=>{
      return {
        title:x.node.title,
        list: x.node.field_menu.dish.map(y=>{
          return{
            name:y.name,
            description:y.description,
            price:y.price
          }
        })
      }
    })

  }
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
    <div className="food-list__container">
      {convertedList().map((y) => {
        return (
          <div className="flex food-list" id={y.title} key={y.title}>
            <div className="food-list__category__text-container">
              <div className="food-list__category__title"> {y.title}</div>
              <div className="food-list__category__desc">
                {y.list.map((x) => {
                  return (
                    <div key={x.name}> 
                      <Food
                        title={x.name}
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
              {console.log(convertedList())}
            </div>
          </div>
        );
      })}
      )
    </div>
  );
};
export default FoodList;
