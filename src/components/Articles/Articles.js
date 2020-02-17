import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Article } from "../Article/Article";

const Container = styled.div`
  padding: 16px;
`;

function Articles({ articles }) {
  return (
    <Container>
      {articles.map(article => (
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
