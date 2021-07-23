const url = "../doc/ISSUE 45.pdf";
let pdfDoc = null,
   pageNum = 1,
   pageIsRendering = false,
   pageNumIsPending = null;

const scale = 1.5;

const canvas = document.querySelector("#pdf-render");
const ctx = canvas?.getContext("2d");

//Render the page
const renderPage = (num) => {
   pageIsRendering = true;

   //Get Page
   pdfDoc.getPage(num).then((page) => {
      console.log(page);
   });
};

//Get Document

pdfjsLib.getDocument(url).promise.then((pdfDoc_) => {
   pdfDoc = pdfDoc_;

   document.querySelector("#page-count").textContent = pdfDoc.numPages;

   renderPage(pageNum);
});
