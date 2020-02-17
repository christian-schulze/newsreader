import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const StyledHeadline = styled.div`
  font-weight: bolder;
`;

const StyledHeadlineLink = styled.a``;

const StyledAuthor = styled.div`
  font-weight: lighter;
`;

const StyledSummary = styled.div``;

function Article({ article }) {
  return (
    <Container data-testid="article">
      <StyledHeadline>
        <StyledHeadlineLink href={article.url} target="_blank">
          {article.title}
        </StyledHeadlineLink>
      </StyledHeadline>
      <StyledAuthor>
        {article.author ? article.author : "Author Blank"}
      </StyledAuthor>
      <StyledSummary>{article.description}</StyledSummary>
    </Container>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    source: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    }),
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
