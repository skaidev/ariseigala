/* eslint-disable @next/next/no-img-element */
import VideoPlayer from "components/videoComp/VideoPlayer";
import TvLayout from "Layout/TvLayout";
import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const Tv = (): JSX.Element => {
  const [src, setSrc] = useState("");
  const [vidSrc, setVidSrc] = useState("");
  const [vidDuration, setVidDuration] = useState("");
  useEffect(() => {
    (async () => {
      if (src) {
        const { url, ok } = await fetch(src);
        console.log(url);
        if (!ok) {
          return false;
        } else {
          setVidSrc(url);
        }
      }
    })();
    setVidSrc("");
  }, [src]);
  const getDuartion = (e: { target: { duration: number } }): void => {
    const { duration } = e.target;
    const durationHrs = Math.floor(duration / 3600);
    const durationMin = Math.floor(duration / 60);
    const durationSec = Math.floor(duration - durationMin * 60);
    const data = `${durationHrs}:${durationMin}:${durationSec}`;
    setVidDuration(data);
  };
  const getSrc = (e: { target: { src: string } }) => {
    const source = e.target.src;
    setSrc(source);
  };

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
                  <VideoPlayer
                    videosrc={vidSrc}
                    duration={vidDuration}
                    index={Video}
                  />
                </div>
                <div className="video-title">
                  <div className="border-bottom py-2 border-dark">
                    <p className="p-0 mb-1">
                      Tempus ornare morbi molestie purus dis et. Pellentesque
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
                  {Cards.slice(6).map((card) => (
                    <div className="col comments-main " key={card}>
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
                            <span className="fw-bold">Emeka Chibuzor</span>
                            <time className="text-muted">2 Hrs ago</time>
                          </div>
                          <p>
                            Nunc amet purus at amet elementum ornare tincidunt
                            phasellus habitant. Sed dui, leo amet, tristique sed
                            porta magnis tincidunt massa. In orci scelerisque
                            nunc cras euismod suscipit non ut orci. Purus ac
                            imperdiet laoreet quam fames. Nunc enim malesuada
                            volutpat mattis. Praesent ipsum lacinia dis metus.
                            In amet, eget tellus facilisi pellentesque. Tortor
                            integer urna libero phasellus. Ullamcorper congue
                            volutpat vel.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="right">
                <div className="row right-main row-cols-1 g-3">
                  {Video(getDuartion, getSrc).map(
                    (card, i): JSX.Element => (
                      <div className="col border-0 right-main-col" key={i}>
                        <div className="card right-main-col-card bg-transparent border-0 d-flex flex-colum flex-md-row">
                          <div className="img d-flex justify-content-end align-items-end">
                            {card.video}
                            <mark
                              className="bg-dark text-white mb-2 me-2"
                              style={{ zIndex: 1 }}
                            >
                              {vidDuration}
                            </mark>
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
                    )
                  )}
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

const Cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const Video = (
  dura: React.MouseEventHandler<HTMLVideoElement> | undefined,
  src: React.MouseEventHandler<HTMLVideoElement> | undefined
) => [
  {
    video: (
      <video
        src="video/tears-of-steel-battle-clip-medium.mp4"
        className="card-img card-video"
        onMouseEnter={dura}
        onClick={src}
        controls={false}
      />
    ),
  },
  {
    video: (
      <video
        src="video/sintel-short.mp4"
        className="card-img card-video"
        onMouseEnter={dura}
        onClick={src}
        controls={false}
      />
    ),
  },
  {
    video: (
      <video
        src="video/sintel-short.mp4"
        className="card-img card-video"
        onMouseEnter={dura}
        onClick={src}
        controls={false}
      />
    ),
  },
];
