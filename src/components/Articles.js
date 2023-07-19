// Articles.js

import React from 'react';

const Article = ({ article }) => {
  return (
    <div className="article">
      <img src={article.imageUrl} alt={article.title} />
      <h3>{article.title}</h3>
      <p>{article.content}</p>
    </div>
  );
};

const Articles = () => {
  // Exemple de données d'articles avec de vraies images aléatoires
  const articles = [
    {
      id: 1,
      title: "Premier article",
      content: "Contenu du premier article...",
      imageUrl: "https://picsum.photos/id/1015/400/300"
    },
    {
      id: 2,
      title: "Deuxième article",
      content: "Contenu du deuxième article...",
      imageUrl: "https://picsum.photos/id/1016/400/300"
    },
    {
      id: 3,
      title: "Troisième article",
      content: "Contenu du troisième article...",
      imageUrl: "https://picsum.photos/id/1018/400/300"
    },
    // ... et ainsi de suite
  ];

  return (
    <section className="articles-section">
      <h2>Articles</h2>
      <div className="articles-list">
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default Articles;
