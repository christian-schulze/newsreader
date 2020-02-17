import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import { Articles } from "./Articles";

describe("Articles", () => {
  const articles = [
    { source: { name: "mockName1" }, title: "mockArticle1" },
    { source: { name: "mockName2" }, title: "mockArticle2" },
    { source: { name: "mockName3" }, title: "mockArticle3" }
  ];

  describe("When not filtered", () => {
    it("renders 3 articles", () => {
      render(<Articles articles={articles} />);

      const articleComponents = screen.getAllByTestId("article");

      expect(articleComponents.length).toEqual(3);
    });
  });

  describe("When filtered", () => {
    it("renders 1 articles", () => {
      render(<Articles articles={articles} />);
      fireEvent.change(screen.getByTestId("sourceFilter"), {
        target: { value: "mockName2" }
      });

      const articleComponents = screen.getAllByTestId("article");

      expect(articleComponents.length).toEqual(1);
    });
  });
});
