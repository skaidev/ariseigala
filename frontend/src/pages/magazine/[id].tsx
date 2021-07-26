import PdfViewer from "components/pdfComp/pdfviewer/PdfViewer";
import PdfLayout from "Layout/PdfLayout";
import React from "react";

const Pdf = (): JSX.Element => {
   return (
      <PdfLayout>
         <div>
            <PdfViewer />
         </div>
      </PdfLayout>
   );
};

export default Pdf;
