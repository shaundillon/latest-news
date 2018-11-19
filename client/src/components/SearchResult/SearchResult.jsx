import React from 'react';
import './SearchResult.css';

export default function SearchResult({ article, toggleArticle }) {
  return (
    <li className="search-result">
      <div className="search-result__image">
        <img src={article.urlToImage} alt={article.title} />
      </div>
      <div>
        <h2 className="search-result__title"><button type="button" onClick={() => toggleArticle(article)}>{article.title}</button></h2>
        <p className="search-result__description">{article.description}</p>
        <p className="search-result__author">{article.author}</p>
      </div>
    </li>
  );
}