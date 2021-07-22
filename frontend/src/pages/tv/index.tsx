/* eslint-disable @next/next/no-img-element */
import VideoPlayer from "components/video/VideoPlayer";
import TvLayout from "Layout/TvLayout";
import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

const Tv = (): JSX.Element => {
   useEffect(() => {
      const vod = document.getElementById("vod");
      if (process.browser) {
         if (vod?.className.includes("player")) {
            console.log(true);
         }
      }
   }, []);
   return (
      <TvLayout>
         <Tvwrapper>
            <div className="tv-body">
               <div className="container py-1 tv-body-main">
                  <div className="w-75 mx-auto py-1 mb-2 tv-search-bar">
                     <form className="d-flex align-items-center position-relative">
                        <input
                           type="search"
                           className="form-control rounded-pill border-2"
                           placeholder="Search..."
                        />
                        <button
                           className="position-absolute search-btn btn "
                           type="button"
                           aria-label="search"
                        >
                           <i className="fas fa-search" aria-hidden="true"></i>
                        </button>
                     </form>
                  </div>
                  <div className="tv-body-main-video d-flex flex-column flex-lg-row">
                     <div className="left">
                        <div className="video-container bg-dark py-3">
                           <VideoPlayer />
                        </div>
                        <div className="video-title">
                           <div className="border-bottom py-2 border-dark">
                              <p className="p-0 mb-1">
                                 Tempus ornare morbi molestie purus dis et.
                                 Pellentesque
                              </p>
                              <span className="text-muted ">3rd June 2021</span>
                           </div>
                           <div className="border-bottom mb-2 border-dark py-2">
                              255 Comments
                           </div>
                        </div>
                        <div className="comment-section mb-3 d-flex flex-column flex-md-row py-3">
                           <div className="profile-pic">
                              <div className="profile-pic-main position-relative rounded-pill">
                                 <img
                                    src="images/Frame 1.png"
                                    alt=""
                                    className="position-absolute"
                                 />
                              </div>
                           </div>
                           <form>
                              <textarea
                                 cols={30}
                                 rows={10}
                                 className="form-control mb-2 border-1 border-dark"
                              ></textarea>
                              <button
                                 className="btn float-end mb-2 px-4 py-2 btn-dark"
                                 type="button"
                              >
                                 Add comment
                              </button>
                           </form>
                        </div>
                        <div className="row comments row-cols-1 g-3">
                           {comments.map((comment, i) => (
                              <div className="col comments-main " key={i}>
                                 <div className="card border-0 comments-main-card p-0 d-flex align-items-md-start flex-column flex-md-row">
                                    <div className="comments-main-card-pic">
                                       <div className="comments-main-card-pic-main overflow-hidden rounded-circle position-relative ">
                                          <img
                                             src="images/Frame 1.png"
                                             alt=""
                                             className="position-absolute"
                                          />
                                       </div>
                                    </div>
                                    <div className="card-body p-0 comments-main-card-body">
                                       <div className="card-title comments-main-card-title align-items-center d-flex justify-content-between">
                                          <span className="fw-bold">
                                             {comment.title}
                                          </span>
                                          <time className="text-muted">
                                             {comment.time}
                                          </time>
                                       </div>
                                       <p>{comment.body}</p>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className="right">
                        <div className="row right-main row-cols-1 g-3">
                           {videos.map((video, i) => (
                              <div
                                 className="col border-0 right-main-col"
                                 key={i}
                              >
                                 <div className="card right-main-col-card bg-transparent border-0 d-flex flex-colum flex-xl-row">
                                    <div className="img d-flex ratio ratio-16x9 bg-danger justify-content-end align-items-end">
                                       <iframe
                                          src={video.videoUrl}
                                          frameBorder={0}
                                          className="w-100 h-100 p-0 m-0"
                                          onClick={(e) => console.log(e.target)}
                                          id="vod"
                                       ></iframe>
                                    </div>
                                    <div className="ms-1 rigth-card-body card-body p-0">
                                       <p className="p-0 mb-2 fw-bolder fs-6">
                                          Lorem ipsum dolor sit amet
                                       </p>
                                       <p className="text-end p-0 m-0 fs-6 fw-light">
                                          <time>1 month ago</time>
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Tvwrapper>
      </TvLayout>
   );
};

export default Tv;

const Tvwrapper = styled.div`
   min-height: 100vh;
`;

const videoSource = [
   { src: "video/tears-of-steel-battle-clip-medium.mp4" },
   { src: "video/sintel-short.mp4" },
   { src: "video/tears-of-steel-battle-clip-medium.mp4" },
   { src: "video/sintel-short.mp4" },
];

const comments = [
   {
      title: "Emeka Chibuzor",
      body: "Nunc amet purus at amet elementum ornare tincidunt phasellus habitant. Sed dui, leo amet, tristique sed porta magnis tincidunt massa. In orci scelerisque nunc cras euismod suscipit non ut orci. Purus ac imperdiet laoreet quam fames. Nunc enim malesuada volutpat mattis. Praesent ipsum lacinia dis metus. In amet, eget tellus facilisi pellentesque. Tortor integer urna libero phasellus. Ullamcorper congue volutpat vel.",
      time: "2 Hrs ago",
   },
   {
      title: "Emeka Chibuzor",
      body: "Nunc amet purus at amet elementum ornare tincidunt phasellus habitant. Sed dui, leo amet, tristique sed porta magnis tincidunt massa. In orci scelerisque nunc cras euismod suscipit non ut orci. Purus ac imperdiet laoreet quam fames. Nunc enim malesuada volutpat mattis. Praesent ipsum lacinia dis metus. In amet, eget tellus facilisi pellentesque. Tortor integer urna libero phasellus. Ullamcorper congue volutpat vel.",
      time: "2 Hrs ago",
   },
   {
      title: "Emeka Chibuzor",
      body: "Nunc amet purus at amet elementum ornare tincidunt phasellus habitant. Sed dui, leo amet, tristique sed porta magnis tincidunt massa. In orci scelerisque nunc cras euismod suscipit non ut orci. Purus ac imperdiet laoreet quam fames. Nunc enim malesuada volutpat mattis. Praesent ipsum lacinia dis metus. In amet, eget tellus facilisi pellentesque. Tortor integer urna libero phasellus. Ullamcorper congue volutpat vel.",
      time: "2 Hrs ago",
   },
   {
      title: "Emeka Chibuzor",
      body: "Nunc amet purus at amet elementum ornare tincidunt phasellus habitant. Sed dui, leo amet, tristique sed porta magnis tincidunt massa. In orci scelerisque nunc cras euismod suscipit non ut orci. Purus ac imperdiet laoreet quam fames. Nunc enim malesuada volutpat mattis. Praesent ipsum lacinia dis metus. In amet, eget tellus facilisi pellentesque. Tortor integer urna libero phasellus. Ullamcorper congue volutpat vel.",
      time: "2 Hrs ago",
   },
   {
      title: "Emeka Chibuzor",
      body: "Nunc amet purus at amet elementum ornare tincidunt phasellus habitant. Sed dui, leo amet, tristique sed porta magnis tincidunt massa. In orci scelerisque nunc cras euismod suscipit non ut orci. Purus ac imperdiet laoreet quam fames. Nunc enim malesuada volutpat mattis. Praesent ipsum lacinia dis metus. In amet, eget tellus facilisi pellentesque. Tortor integer urna libero phasellus. Ullamcorper congue volutpat vel.",
      time: "2 Hrs ago",
   },
];

const videos = [
   {
      videoUrl:
         "https://www.youtube.com/embed/ysz5S6PUM-U?modestbranding=1&controls=0&disablekb=1&autoplay=0&modestbranding=0",
      id: "kdkdkdkdkd",
      title: "my title",
      createdAt: Date.now(),
   },
   {
      videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
      id: "kdksssdkdkdkd",
      title: "my title",
      createdAt: Date.now(),
   },
   {
      videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
      id: "kdkdkdkdkdhshsh",
      title: "my title",
      createdAt: Date.now(),
   },
];
