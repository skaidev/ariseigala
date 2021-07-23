import PdfLayout from "Layout/PdfLayout";
import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styled from "styled-components";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const preventLeftClick = () => {
   /*To Prevent right click on screen*/
   document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
   });
};

const Test = (): JSX.Element => {
   useEffect(() => preventLeftClick(), []);
   useEffect(() => {
      let state = true;
      if (state) {
      }
      return () => {
         state = false;
      };
   }, []);
   const [numPages, setNumPages] = useState(Number(null));
   const [pageNumber, setPageNumber] = useState(1);
   const [zoom, setZoom] = useState(1);
   const [menu, setMenu] = useState(false);
   const [content, setContent] = useState<number[]>([]);
   const [url, setUrl] = useState("");
   console.log(typeof content);
   /*When document gets loaded successfully*/
   function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
      setNumPages(numPages);
      setPageNumber(1);
      setZoom(1);
      const num: number[] = [];
      for (let i = 1; i <= numPages; i++) {
         num.push(i);
      }
      setContent(num);
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
   /* Set content */
   function pageNum(num: number) {
      setPageNumber(Number(num));
      setMenu(false);
   }

   const handlePdfUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { files } = e.target;
      const pdf = files?.[0];
      const pdf_url = window.URL.createObjectURL(pdf);
      setUrl(pdf_url);
   };
   return (
      <PdfLayout>
         <>
            {menu && (
               <Menu className="animate__animated animate__zoomIn">
                  <div className="animate__animated animate__fadeInLeft ps-5 cover">
                     <div className="d-flex justify-content-end px-2 py-1">
                        <button
                           className="btn "
                           role="button"
                           aria-label="toggle menu"
                           onClick={() => setMenu(false)}
                        >
                           <i className="fas fa-times fa-2x"></i>
                        </button>
                     </div>
                     <h4>Contents</h4>
                     <div>
                        {content?.map((e: number) => (
                           <div
                              id={String(e)}
                              key={e}
                              className={`mb-1 c-pointer content-bar align-items-start g-2 d-flex py-1 ${
                                 pageNumber === e ? "gray" : ""
                              }`}
                              onClick={() => pageNum(e)}
                           >
                              <div className="left">
                                 <div className="pe-2">
                                    <p className="fw-bold mb-0">
                                       - A in nunc purus urna nulla eu gravida
                                       quisque.
                                    </p>
                                    <p>
                                       Nisl, ac eget ac nibh. Vel dui auctor
                                       ultricies quisque a nibh.
                                    </p>
                                 </div>
                              </div>
                              <div className="right d-flex justify-content-center align-items-center px-1">
                                 <b className="fs-5">{e}</b>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </Menu>
            )}
            <main className="bg-light">
               <section className="py-2 flex-grow-1">
                  <Main className="main container">
                     <div className="py-2 mb-3">
                        <form>
                           <input
                              type="file"
                              onChange={handlePdfUpload}
                              className="form-control"
                           />
                        </form>
                     </div>
                     <div className="d-flex mb-2 py-1 justify-content-between toggle-zoom">
                        <div className="content-menu">
                           <button
                              className="btn"
                              role="button"
                              aria-label="toggle menu"
                              onClick={() => setMenu(true)}
                           >
                              <i className="fas fa-bars fa-2x"></i>
                           </button>
                        </div>
                        <div className="d-flex toggle-zoom-main">
                           <button
                              className="btn toggle-zoom-minus"
                              onClick={() => setZoom((c) => c - 1)}
                              disabled={zoom <= 1}
                              aria-label="zoom out"
                           >
                              <i className="fas fa-search-minus"></i>
                           </button>
                           <button
                              className="toggle-zoom-plus btn"
                              onClick={() => setZoom((c) => c + 1)}
                              disabled={zoom >= 5}
                              aria-label="zoom in"
                           >
                              <i className="fas fa-search-plus"></i>
                           </button>
                        </div>
                     </div>
                     <Document
                        file={url}
                        className="pdfViewer"
                        onLoadSuccess={onDocumentLoadSuccess}
                        renderMode="canvas"
                        onLoadError={() => {
                           alert(`Can't load pdf`);
                        }}
                        error={`cant't load PDF`}
                        loading="loading........."
                     >
                        <Page
                           pageNumber={pageNumber}
                           scale={zoom}
                           className="pdfViewer_"
                        />
                     </Document>
                     <div className=" mt-1 py-1 border-darken-4 text-dark control-nav">
                        <div className="progress">
                           <div
                              className="progress-bar progress-bar-striped"
                              role="progressbar"
                              style={{
                                 width: `${Math.round(
                                    (pageNumber / Number(numPages)) * 100
                                 )}%`,
                              }}
                              aria-label="progress"
                              aria-valuenow={pageNumber}
                              aria-valuemin={0}
                              aria-valuemax={100}
                           ></div>
                        </div>
                        <p className="text-end mb-1 fw-bold fs-5">
                           {Math.round((pageNumber / Number(numPages)) * 100)}%
                           read
                        </p>
                        <div className="d-flex control-nav-main justify-content-center align-items-center">
                           <button
                              type="button"
                              disabled={pageNumber <= 1}
                              onClick={previousPage}
                              className="Pre btn p-0 bg-transparent"
                              aria-label="arrow left"
                           >
                              <i className="fas fa-2x fa-caret-left"></i>
                           </button>
                           <div className="pagec">
                              Page {pageNumber || (numPages ? 1 : "--")} of{" "}
                              {numPages || "--"}
                           </div>
                           <button
                              type="button"
                              disabled={pageNumber >= Number(numPages)}
                              onClick={nextPage}
                              className="btn p-0 bg-transparent"
                              aria-label="arrow right"
                           >
                              <i className="fas fa-2x fa-caret-right"></i>
                           </button>
                        </div>
                     </div>
                  </Main>
               </section>
            </main>
         </>
      </PdfLayout>
   );
};

export default Test;
const Main = styled.div`
   user-select: none;
   width: 90%;
   max-width: 100000000px;
   min-height: 95vh;
   .toggle-zoom {
      &-main {
         gap: 2rem;
         i {
            font-size: 2rem;
         }
      }
   }
   .pdfViewer {
      width: 100% !important;
      margin: 0 auto;
      &_ {
         overflow: hidden !important;

         width: inherit;
         section {
            display: none !important;
         }
         canvas {
            direction: none;
            margin: 0 auto;
            width: inherit !important;
            max-width: 10000px !important;
         }
      }
   }
   .control-nav {
      .pdf-progress {
         position: relative;
         height: 30px;
         display: flex;
         align-items: center;
         .dot {
            position: absolute;
            width: 30px;
            height: 30px;
            background: #a7a7a7;
         }
      }
      &-main {
         gap: 3rem;
      }
   }
`;

const Menu = styled.div`
   position: fixed;
   width: 100%;
   height: 100%;
   z-index: 100000;
   background-color: #00000049;
   top: 0;
   left: 0;
   .cover {
      width: 50%;
      height: 100%;
      background-color: white;
      overflow: auto;
      @media screen and (max-width: 768px) {
         width: 90%;
      }
      .gray {
         background: gainsboro;
      }
      .content-bar {
         .left {
            flex: auto.8;
         }
         .right {
            flex: 0.2;
         }
      }
   }
`;
