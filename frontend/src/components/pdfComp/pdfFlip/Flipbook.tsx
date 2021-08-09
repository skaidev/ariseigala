import React, { useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";

interface IFlip {
  children: React.ReactChild[];
  width: number;
  height: number;
}

export const Flipbook = ({ children, width, height }: IFlip): JSX.Element => {
  let pageFlip = useRef();

  useEffect(() => {
    console.log(pageFlip?.pageFlip());
  }, [pageFlip]);

  return (
    <div className="d-flex justify-content-center">
      <HTMLFlipBook
        width={width}
        height={height}
        maxWidth={width}
        className="pdf-flipper"
        autoSize={true}
        mobileScrollSupport={true}
        usePortrait={true}
        showPageCorners={false}
        onFlip={(e) => console.log(e.data)}
        ref={(component) => (pageFlip = component)}
        // drawShadow={true}
      >
        {children}
      </HTMLFlipBook>
    </div>
  );
};
