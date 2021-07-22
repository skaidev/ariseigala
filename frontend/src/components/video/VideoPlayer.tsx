import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
const VideoPlayer = (): JSX.Element => {
   return (
      <div>
         <div>
            {process.browser && (
               <ReactPlayer
                  url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                  controls={true}
                  width={`100%`}
                  onBuffer={() => console.log("buffing")}
                  fallback={
                     <>
                        <FallBackIcon />
                     </>
                  }
               />
            )}
         </div>
      </div>
   );
};

export default VideoPlayer;

export const FallBackIcon = (): JSX.Element => {
   return (
      <div className="h-100 w-100 d-flex justify-content-center align-items-center">
         <i className="fas fa-spinner animate__animated animate__infinite animate__rotateIn fa-2x text-white"></i>
      </div>
   );
};
