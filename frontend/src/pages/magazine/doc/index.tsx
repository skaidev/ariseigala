import PDFViewer from "pdf-viewer-reactjs";
import React, { useEffect } from "react";
import styled from "styled-components";

const handleNav = () => {
  const btn = document.querySelectorAll(".button");
  btn.forEach((e) => {
    if (e.textContent.includes("keyboard_arrow_left")) {
      e.innerHTML = `<i class="fas fa-caret-left"></i>`;
    }
    if (e.textContent.includes("keyboard_arrow_right")) {
      e.innerHTML = `<i class="fas fa-caret-right"></i>`;
    }
    if (e.textContent.includes("zoom_in")) {
      e.innerHTML = `<i class="fas fa-search-plus"></i>`;
    }
    if (e.textContent.includes("zoom_out")) {
      e.innerHTML = `<i class="fas fa-search-minus"></i>`;
    }
  });
};
const ExamplePDFViewer = (): JSX.Element => {
  useEffect(() => {
    handleNav();
  }, []);
  return (
    <PDFWRAPPER>
      <PDFViewer
        document={{
          url: "https://arxiv.org/pdf/quant-ph/0410100.pdf",
        }}
        hideRotation
        scaleStep={0.3}
        // scale={1.2}
        minScale={1.5}
        // maxScale={3}
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
          background: white;
          color: black;
          div {
            display: flex;
            flex-direction: column;
            div:nth-of-type(1) {
              flex: 1;
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
              gap: 1.5rem;
              button {
                border: 0;
                font-weight: bold;
                font-size: 1.5rem;
                color: black;
              }

              button:nth-of-type(2) {
                display: none;
              }
            }
            div:nth-of-type(3) {
              flex: 1;
              display: flex;
              flex-direction: row;
              justify-content: center;
              gap: 3rem;
              align-items: center;
              button {
                border: 0;
                background: transparent;
                color: black;
                font-size: 3rem;
              }
            }
          }
        }
      }
    }
  }
`;
