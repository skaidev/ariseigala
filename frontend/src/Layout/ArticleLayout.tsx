import HeaderComp from "components/HeaderComp";
import React from "react";

const ArticleLayout = ({
  children,
}: {
  children: React.ReactChild;
}): JSX.Element => {
  return (
    <div id="article-layout">
      <HeaderComp />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default ArticleLayout;
