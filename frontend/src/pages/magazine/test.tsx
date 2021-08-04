import PdfLayout from "Layout/PdfLayout";
import React from "react";
import HTMLFlipBook from "react-pageflip";

const Test = (): JSX.Element => {
  const onFlip = (e) => {
    console.log("Current page: " + e);
  };
  return (
    <PdfLayout>
      <div>
        <HTMLFlipBook
          width={500}
          maxWidth={1000}
          height={500}
          className="w-100"
          size="stretch"
          onFlip={(e) => onFlip(e.data)}
          mobileScrollSupport={true}
        >
          <div className="demoPage bg-warning">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis cum,
            accusamus quis, nesciunt reprehenderit dicta tempora blanditiis
            repudiandae ipsum ut nisi saepe accusantium sunt eum voluptatem
            atque voluptate quas ipsa. Omnis repellendus quam veniam officia
            reprehenderit ea iusto, magni magnam, necessitatibus voluptatum
            nostrum esse at aperiam! Porro fuga neque animi rem, blanditiis
            reprehenderit maxime repellat voluptatem suscipit? Fugiat quos saepe
            voluptatibus iure, illo deserunt itaque. Id iste esse deserunt est,
            officiis recusandae eveniet cumque doloribus cupiditate tempora
            facere magnam iusto blanditiis inventore, repellendus eos asperiores
            vero aut quis eligendi neque similique eum. Ut ipsam in adipisci
            eius quam at nesciunt.
          </div>
          <div className="demoPage bg-danger">Page 2</div>
          <div className="demoPage bg-secondary">Page 3</div>
          <div className="demoPage bg-success">Page 4</div>
        </HTMLFlipBook>
      </div>
    </PdfLayout>
  );
};

export default Test;
