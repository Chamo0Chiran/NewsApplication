import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data), setArticles(data.articles);
      });
  }, [category]);
  return (
    <div>
      <h2 className="text-center mt-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="row justify-content-center">
        {articles
          .filter((news) => news.urlToImage)
          .map((news, index) => {
            return (
              <NewsItem
                key={index}
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            );
          })}
      </div>
    </div>
  );
};

NewsBoard.propTypes = {
  category: PropTypes.func,
};
export default NewsBoard;
