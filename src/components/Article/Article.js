import PropTypes from "prop-types";
import React from "react";

function Article({ article }) {
  return <div>{article.title}</div>;
}

Article.propTypes = {
  article: PropTypes.objectOf({
    source: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    urlToImage: PropTypes.string,
    publishedAt: PropTypes.string,
    content: PropTypes.string
  })
};

export { Article };
