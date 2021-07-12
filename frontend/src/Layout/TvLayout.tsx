import MagazineFooter from "components/magazineComp/MagazineFooter";
import MagazineHeader from "components/magazineComp/MagazineHeader";
import TvHeader from "components/TvHeader";
import React from "react";

const PdfLayout = ({
  children,
}: {
  children: React.ReactChild;
}): JSX.Element => {
  return (
    <div id="article-layout">
      <TvHeader />
      <main>{children}</main>
      <MagazineFooter />
    </div>
  );
};

export default PdfLayout;
