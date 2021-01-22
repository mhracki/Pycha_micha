import React from "react";
import News from "./news";

const NewsList = () => {
  const newsList = [
    {
      title: "Dostawa już od dziś!",
      description:
        "UWAGA, UWAGA !! 😍😃😀        Z wielką przyjemnością informujemy Was, że od jutra 22.10.2020 nasza restauracja Pycha Micha wprowadza DOWÓZ 🚗🚗🚗🚗      Na terenie Cieszyna dowóz gratis, przy zamówieniu minimum 20 zł",
      date: "1.01.2021",
      img: '/images/van.svg',
      isMain:false
    },
    {
      title: "Dostawa już od dziś!",
      description:
        "Od dzisiaj oferujemy darmową dostawę na terenie Cieszyna od 20zł!",
      date: "1.01.2021",
      img: null,
      isMain:true
    },
    {
      title: "Dostawa już od dziś!",
      description:
      "Godziny pracy zostały zmienione. ",
      date: "1.01.2021",
      img: '/images/delivery.jpg',
      isMain:false
    },
  ];

  return (
    <div className="flex news-list">
      <div className="news-list__title">Aktualności</div>
      <div className="flex news-list-container">
        {" "}
        {newsList.map((x) => {
          return (
            <News
              key={x.title}
              title={x.title}
              img={x.img}
              description={x.description}
              date={x.date}
            />
          );
        })}
      </div>
    </div>
  );
};
export default NewsList;
