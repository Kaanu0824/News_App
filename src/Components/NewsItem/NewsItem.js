// import React from 'react';
// import './NewsItem.css';

// const NewsItem = ({ title, description, url, urlToImage }) => {
//   return (
//     <div className="news-item">
//       {urlToImage && <img src={urlToImage} alt={title} />}
//       <h2>{title}</h2>
//       <p>{description}</p>
//       <a href={url} target="_blank" rel="noopener noreferrer">
//         Read more
//       </a>
//     </div>
//   );
// };

// export default NewsItem;

// src/components/NewsItem.js
import React from 'react';
import './NewsItem.css';

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div className="news-item">
      {urlToImage && <img src={urlToImage} alt={title} className="news-image" />}
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default NewsItem;

