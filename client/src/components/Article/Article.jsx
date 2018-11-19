import React from 'react';
import './Article.css'

export default function Article({article, close}) {
  console.log(article);
  const backgroundStyle = {
    backgroundImage: `url('${article.urlToImage}')`
  }

  return (
    <div className="article">
      <div className="article__header" style={backgroundStyle}>    
        <h1 className="article__title">{article.title}</h1>
      </div>
      <div className="article__wrap">
        <p className="article__content">{article.content}</p>
      </div>
      <button className="article__close" onClick={() => close()}>✖</button>
    </div>
  )
}