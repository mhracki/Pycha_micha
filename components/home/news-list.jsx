import React from "react";
import News from "./news";

const NewsList = () => {
  const newsList = [
    {
      title: "Dostawa już od dziś!",
      description:
        "Od dzisiaj oferujemy darmową dostawę na terenie Cieszyna od 20zł!",
      date: "1.01.2021",
      img: "../images/dowoz.jpg",
      isMain:true
    },
    {
      title: "Dostawa już od dziś!",
      description:
        "Od dzisiaj oferujemy darmową dostawę na terenie Cieszyna od 20zł!",
      date: "1.01.2021",
      img: " ",
      isMain:false
    },
    {
      title: "Dostawa już od dziś!",
      description:
        "Od dzisiaj oferujemy darmową dostawę na terenie Cieszyna od 20zł!",
      date: "1.01.2021",
      img: " ",
      isMain:false
    },
  ];

  return (
    <div className="flex news-list">
      <div className="news-list__title">Aktualności</div>
      <div className="flex">
        {" "}
        {newsList.map((x) => {
          return (
            <News
              key={x.title}
              title={x.title}
              img={x.img}
              name={x.description}
              date={x.date}
            />
          );
        })}
      </div>
    </div>
  );
};
export default NewsList;
