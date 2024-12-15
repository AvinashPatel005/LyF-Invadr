import React, { useState, useEffect } from "react";
import { useTheme } from '../ThemeContext';

const News = () => {
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useTheme(); 

  useEffect(() => {
    try {
      
      fetch(
        "https://sz77nrktjulow6pgs5xvuh4wia0yaasb.lambda-url.ap-south-1.on.aws/"
      )
        .then((res) => res.json())
        .then((data) => {
          const filteredNews = data.articles.filter(
            (article) => article.title && article.description && article.urlToImage
          );
          setNews(filteredNews);
        })
    } catch (error) {
      console.error("Failed to fetch news:", error)
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === news.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [news.length]);

  return (
    <div className={`widget news ${theme === 'dark' ? 'dark' : ''}`}>
      {news.length > 0 ? (
        <>
          <div className={`news-left ${theme === 'dark' ? 'dark' : ''}`}>
            <div className={`news-info ${theme === 'dark' ? 'dark' : ''}`}>
              <h4 style={{color:theme==='dark'?"white":"black"}}>{news[currentIndex].title}</h4>
              <a
                href={news[currentIndex].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <img className="new-img" src={news[currentIndex].urlToImage} alt="img" />
        </>
      ) : (
        <p>Loading news...</p>
      )}
    </div>
  );
};

export default News;
