// src/components/NewsItem.js
import React from 'react';
import './NewsItem.css';

const NewsItem = ({ title, description, url, urlToImage }) => {
  const placeholderImage = 'https://via.placeholder.com/150';

  // Use a fallback in case urlToImage is missing or invalid
  const imageUrl = urlToImage || placeholderImage;

  return (
    <div className="news-item">
      <img src={imageUrl} alt={title} className="news-image" />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default NewsItem;
