import HeaderComp from "components/HeaderComp";
import MagazineFooter from "components/magazineComp/MagazineFooter";
import PdfHeader from "components/PdfHeader";
import React from "react";

const PdfLayout = ({
  children,
}: {
  children: React.ReactChild;
}): JSX.Element => {
  return (
    <div id="article-layout">
      <PdfHeader />
      <main>{children}</main>
      <MagazineFooter />
    </div>
  );
};

export default PdfLayout;
