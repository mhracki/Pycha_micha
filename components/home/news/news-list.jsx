import React from "react";
import News from "./news";

const NewsList = ({ newsList }) => {
  const newsListq = [
    {
      title: "Dostawa już od dziś!",
      description:
        "UWAGA, UWAGA !! 😍😃😀        Z wielką przyjemnością informujemy Was, że od jutra 22.10.2020 nasza restauracja Pycha Micha wprowadza DOWÓZ 🚗🚗🚗🚗      Na terenie Cieszyna dowóz gratis, przy zamówieniu minimum 20 zł",
      date: "1.01.2021",
      img: "/images/van.svg",
      isMain: false,
    },
    {
      title: "Dostawa już od dziś!",
      description:
        "Od dzisiaj oferujemy darmową dostawę na terenie Cieszyna od 20zł!",
      date: "1.01.2021",
      img: null,
      isMain: true,
    },
    {
      title: "Dostawa już od dziś!",
      description: "Godziny pracy zostały zmienione. ",
      date: "1.01.2021",
      img: "/images/delivery.jpg",
      isMain: false,
    },
  ];

  return (
    <div className="flex news-list">
      <div className="news-list__title">Aktualności</div>
      <div className="flex news-list-container">
        <News
          key={newsList.news_list.info_1.id}
          title={newsList.news_list.info_1.Title}
          img={newsList.news_list.info_1.image.url}
          description={newsList.news_list.info_1.Descritpion}
          date={newsList.news_list.info_1.Date}
        />
        <News
          key={newsList.news_list.info_2.id}
          title={newsList.news_list.info_2.Title}
          img={newsList.news_list.info_2.image.url}
          description={newsList.news_list.info_2.Descritpion}
          date={newsList.news_list.info_2.Date}
        />
        <News
          key={newsList.news_list.info_3.id}
          title={newsList.news_list.info_3.Title}
          img={newsList.news_list.info_3.image.url}
          description={newsList.news_list.info_3.Descritpion}
          date={newsList.news_list.info_3.Date}
        />
      </div>
    </div>
  );
};
export default NewsList;
