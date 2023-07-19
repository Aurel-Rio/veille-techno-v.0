import React from 'react';
import Article from './Articles'; // Assurez-vous de créer le composant Article pour afficher un article individuel

const ArticlesSection = ({ articles }) => {
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

export default ArticlesSection;