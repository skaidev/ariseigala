import ArticleLayout from "Layout/ArticleLayout";
import React from "react";
import YouTube from "react-youtube";

const test = (): JSX.Element => {
   const url = "nfk6sCzRTbM";
   const opts = {
      playerVars: {
         autoplay: 0,
         controls: 0,
         color: "#ffff00",
         disablekb: 0,
         modestbranding: 1,
      },
   };

   return (
      <ArticleLayout>
         <div>
            <div style={{ pointerEvents: "none" }}>
               <YouTube videoId={url} opts={opts} />
            </div>
         </div>
      </ArticleLayout>
   );
};

export default test;
