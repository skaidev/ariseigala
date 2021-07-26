import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PdfViewer(): JSX.Element {
   const samplePDF = "https://www.zok.com/pdf/msds/44-ZOK_27_SDS4524.pdf";
   const [numPages, setNumPages] = useState(null);
   const [pageNumber, setPageNumber] = useState(1);

   function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      setPageNumber(1);
   }

   function changePage(offset: number) {
      setPageNumber((prevPageNumber) => prevPageNumber + offset);
   }

   function previousPage() {
      changePage(-1);
   }

   function nextPage() {
      changePage(1);
   }
   return (
      <>
         <div className="container overflow-auto mb-3 d-flex justify-content-center">
            <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
               <Page pageNumber={pageNumber} scale={1.5} />
            </Document>
         </div>
         <div className="d-flex justify-content-center">
            <div className="d-flex gap-3 align-items-center">
               <button
                  type="button"
                  disabled={pageNumber <= 1}
                  onClick={previousPage}
                  className="btn "
               >
                  <i className="fas fa-2x fa-caret-left"></i>
               </button>
               <p className="m-0">
                  Page {pageNumber || (numPages ? 1 : "--")} of
                  {numPages || "--"}
               </p>

               <button
                  type="button"
                  disabled={pageNumber >= numPages}
                  onClick={nextPage}
                  className="btn"
               >
                  <i className="fas fa-2x fa-caret-right"></i>
               </button>
            </div>
         </div>
      </>
   );
}
