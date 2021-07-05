import Head from "next/head";
import PDFViewer from "pdf-viewer-reactjs";
import React from "react";
import styled from "styled-components";

const ExamplePDFViewer = (): JSX.Element => {
  const url = "https://arxiv.org/pdf/quant-ph/0410100.pdf";
  return (
    <PDFWRAPPER className="py-3">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <PDFViewer
        document={{
          url,
        }}
        hideRotation
        scaleStep={0.3}
        scale={1.4}
        minScale={1.5}
        maxScale={4}
      />
    </PDFWRAPPER>
  );
};

export default ExamplePDFViewer;

const PDFWRAPPER = styled.div`
  div {
    div {
      div {
        div:nth-of-type(2) {
          div {
            div:nth-of-type(1) {
              gap: 3rem;
              display: flex;

              button:nth-of-type(1) {
                padding: 15px;
              }
              button:nth-of-type(2) {
                display: none;
              }
              button:nth-of-type(3) {
                padding: 15px;
              }
            }
          }
        }
      }
    }
  }
`;
