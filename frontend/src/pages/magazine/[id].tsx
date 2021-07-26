import PdfLayout from "Layout/PdfLayout";
import React from "react";

const Pdf = (): JSX.Element => {
  return (
    <PdfLayout>
      <div>
        <canvas id="pdf-render" className="mx-auto d-block mb-3"></canvas>
        <div className="container">
          <div className="progress mb-2">
            <div className="progress-bar"></div>
          </div>
          <div className="mb-2 fw-bold d-flex justify-content-end">
            <span className="percent-read"></span>% read
          </div>
          <div className="top-bar d-flex align-items-center justify-content-center">
            <button className="btn" id="prev-page">
              <i className="fas fa-arrow-circle-left"></i> Prev Page
            </button>
            <span className="page-info">
              Page <span id="page-num"></span> of
              <span id="page-count"></span>
            </span>
            <button className="btn" id="next-page">
              Next Page <i className="fas fa-arrow-circle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </PdfLayout>
  );
};

export default Pdf;
