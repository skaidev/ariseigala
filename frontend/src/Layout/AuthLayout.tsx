import MagazineFooter from "components/magazineComp/MagazineFooter";
import PdfHeader from "components/pdfComp/PdfHeader";

import React from "react";
import styled from "styled-components";

const AuthLayout = ({
  children,
}: {
  children: React.ReactChild;
}): JSX.Element => {
  return (
    <AuthMain id="article-layout">
      <PdfHeader />
      <main>{children}</main>
      <MagazineFooter />
    </AuthMain>
  );
};

export default AuthLayout;

const AuthMain = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
`;
