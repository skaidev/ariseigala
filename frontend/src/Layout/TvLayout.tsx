import MagazineFooter from "components/magazineComp/MagazineFooter";
import TvHeader from "components/tvComp/TvHeader";
import React from "react";
import styled from "styled-components";

const PdfLayout = ({
  children,
}: {
  children: React.ReactChild;
}): JSX.Element => {
  return (
    <TvMain id="tv-layout">
      <TvHeader />
      <main>{children}</main>
      <MagazineFooter />
    </TvMain>
  );
};

export default PdfLayout;
const TvMain = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;
