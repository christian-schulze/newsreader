import React, { useEffect, useState } from "react";

import { config } from "../../config";

import { FetchError } from "./FetchError";
import { Articles } from "./Articles";

const API_URL = "http://newsapi.org/v2/top-headlines?country=au&apiKey=";

async function fetchArticles() {
  const url = API_URL + config.API_KEY;
  const response = await fetch(url);
  const json = await response.json();

  return json;
}

function ArticlesContainer() {
  const [articlesResponse, setArticlesResponse] = useState({});

  useEffect(() => {
    async function fetch() {
      const json = await fetchArticles();
      setArticlesResponse(json);
    }
    fetch();
  }, []);

  if (articlesResponse.status === "ok") {
    return <Articles articles={articlesResponse.articles} />;
  } else {
    return <FetchError articlesResponse={articlesResponse} />;
  }
}

export { ArticlesContainer };
