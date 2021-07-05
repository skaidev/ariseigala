import React from "react";
import PDFViewer from "pdf-viewer-reactjs";
import styled from "styled-components";

const ExamplePDFViewer = (): JSX.Element => {
  // PropTypes.shape({});
  // url = "https://arxiv.orgclear/pdf/quant-ph/0410100.pdf";
  return (
    <PDFWRAPPER>
      <PDFViewer
        document={{
          url: "",
          // hideRotation: true,
        }}
        hideRotation={true}
      />
    </PDFWRAPPER>
  );
};

export default ExamplePDFViewer;

const PDFWRAPPER = styled.div`
  /* div {
    div {
      div {
        div:nth-of-type(2) {
          background: red;
          div {
            display: grid;
            grid-template-columns: 1fr 1fr;
            div:nth-of-type(1) {
              display: flex;
              /* justify-content: center; */
  /* align-items: center;
              button {
                display: none;
              }
              button:nth-of-type(3) {
                display: block;
                position: relative;
                width: 0;
                height: 0;
                background: none;
                border: 0;

                color: transparent;
                &::after {
                  content: "";
                  font-size: 100px;
                  color: black;
                  top: 0;
                  right: -100%;
                  position: absolute;
                  width: 50px;
                  height: 50px;
                  background: url("./svg/search-plus-solid.svg") no-repeat;
                }
              }
            }
            div:nth-of-type(2) {
              display: none;
            }
            div:nth-of-type(5) {
              display: none;
            }
          }
        }
      }
    }
  } */
`;
