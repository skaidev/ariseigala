import PdfLayout from "Layout/PdfLayout";
import React from "react";

const Pdf = (): JSX.Element => {
   return (
      <PdfLayout>
         <div>
            <div className="top-bar">
               <button className="btn" id="prev-page">
                  <i className="fas fa-arrow-circle-left"></i> Prev Page
               </button>
               <button className="btn" id="prev-page">
                  Next Page <i className="fas fa-arrow-circle-right"></i>
               </button>

               <span className="page-info">
                  Page <span id="page-num"></span> of
                  <span id="page-count"></span>
               </span>
            </div>
            <canvas id="pdf-render"></canvas>
         </div>
      </PdfLayout>
   );
};

export default Pdf;
