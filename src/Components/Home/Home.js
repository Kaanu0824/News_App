// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsItem from '../NewsItem/NewsItem';
import './Home.css';

const Home = () => {
  const { category } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiKey = '0843699a879e4cd8a273abec4771aba6';
    const url = category 
      ? `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
      : `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setNews(data.articles));
  }, [category]);

  return (
    <div className="home">
      {news.map((article) => (
        <NewsItem
        key={article.url}
        title={article.title}
        description={article.description}
        url={article.url}
        urlToImage={article.urlToImage}
        />
      
      ))}
    </div>
  );
};

export default Home;
