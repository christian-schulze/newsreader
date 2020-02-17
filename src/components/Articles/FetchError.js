import React from "react";

function FetchError({ articlesResponse }) {
  return (
    <>
      <div>{articlesResponse.code}</div>
      <div>{articlesResponse.message}</div>
    </>
  );
}

export { FetchError };
