import HeaderComp from "components/HeaderComp";
import React from "react";
import FooterComp from 'components/FooterComp';

const ArticleLayout = ({
  children,
}: {
  children: React.ReactChild;
}): JSX.Element => {
  return (
    <div id="article-layout">
      <HeaderComp />
      <main>{children}</main>
      <FooterComp />
    </div>
  );
};

export default ArticleLayout;
