import React from "react";
import News from "./news";

const NewsList = ({ newsList }) => {
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
