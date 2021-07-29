import { apollo } from "apollo";
import { GET_MAGAZINE } from "apollo/queries/magazineQuery";
import PdfViewer from "components/pdfComp/pdfviewer/PdfViewer";
import PdfLayout from "Layout/PdfLayout";
import { NextPage, NextPageContext } from "next";
import React from "react";
import { HTTP_URI } from "utils/constants";

const Pdf: NextPage<{ file: string }> = ({ file }: { file: string }): JSX.Element => {
  if (!file) return <p>Loading...</p>;
  return (
    <PdfLayout>
      <div>
        <PdfViewer file={`${HTTP_URI}${file}`} />
      </div>
    </PdfLayout>
  );
};

export default Pdf;

Pdf.getInitialProps = async (ctx: NextPageContext) => {
  console.log(ctx?.query);
  try {
    const { data } = await apollo.query({
      query: GET_MAGAZINE,
      variables: { id: ctx?.query?.id },
    });
    const file = data?.magazine?.pdf?.url;
    return {
      file,
    };
  } catch (error) {
    console.log(error);
    return {
      file: "",
    };
  }
};
