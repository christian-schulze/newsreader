import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

import { Article } from "../Article/Article";
import { SourceFilter } from "./SourceFilter";

const Container = styled.div`
  padding: 16px;
`;

function Articles({ articles }) {
  const [sourceFilter, setSourceFilter] = useState();

  const handleChangeSourceFilter = event => {
    setSourceFilter(event.target.value);
  };

  const sources = articles.reduce((reduced, article) => {
    if (!reduced.includes(article.source.name)) {
      reduced.push(article.source.name);
    }

    return reduced;
  }, []);

  let filteredArticles = articles.slice(0);
  if (sourceFilter) {
    filteredArticles = articles.filter(article => {
      return article.source.name === sourceFilter;
    });
  }

  return (
    <Container>
      <SourceFilter sources={sources} onChange={handleChangeSourceFilter} />
      {filteredArticles.map(article => (
        <Article key={article.title} article={article} />
      ))}
    </Container>
  );
}

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      source: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
      }),
      title: PropTypes.string
    })
  )
};

export { Articles };
