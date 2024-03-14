import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NewsComponent.css"; // Import the CSS file

const NewsComponent = ({ category }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      let url = "http://127.0.0.1:8000/home/";
      if (category) {
        url += `?category=${category}`;
      }
      try {
        const response = await axios.get(url);
        console.log(response);
        setNews(
          response.data.articles.filter(
            (article) => article.title !== "[Removed]"
          )
        );
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div>
      <h2 className="text-center mb-4">Latest News</h2>
      <div className="row">
        {news.map((article, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  className="card-img-top"
                  alt="Article"
                />
              )}
              <div className="card-body">
                <h5 className="card-title">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title}
                  </a>
                </h5>
                <p className="card-text">{article.description}</p>
                <p className="card-text">Date: {article.publishedAt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsComponent;
