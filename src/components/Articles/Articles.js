import PropTypes from "prop-types";
import React from "react";
import { Article } from "../Article/Article";

function Articles({ articles }) {
  return (
    <div>
      {articles.map(article => (
        <Article key={article.title} article={article} />
      ))}
    </div>
  );
}

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.objectOf({
      title: PropTypes.string
    })
  )
};

export { Articles };
