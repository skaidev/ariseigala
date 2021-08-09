import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";

interface IFlip {
  children: React.ReactChild[];
  width: number;
  height: number;
}

export const Flipbook = ({ children, width, height }: IFlip): JSX.Element => {
  let pageFlip = useRef();

  return (
    <div className="">
      <HTMLFlipBook
        width={width}
        height={height}
        maxWidth={width}
        className="pdf-flipper d-block mx-auto"
        autoSize={true}
        mobileScrollSupport={true}
        usePortrait={true}
        showPageCorners={false}
        onFlip={(e) => console.log(e.data)}
        ref={(component) => (pageFlip = component)}
      >
        {children}
      </HTMLFlipBook>
    </div>
  );
};
