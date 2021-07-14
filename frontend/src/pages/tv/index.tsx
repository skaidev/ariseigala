/* eslint-disable @next/next/no-img-element */
import TvLayout from "Layout/TvLayout";
import React, { useRef, useState } from "react";
import styled from "styled-components";

const Tv = (): JSX.Element => {
  const [currentVidTime, setCurrentVidTime] = useState(null);
  const [vidDurationTime, setVidDurationTime] = useState(null);
  const [range, setRange] = useState({
    max: "",
    value: "0",
  });
  const [play_pause, setPlay_Pause] = useState(false);

  const vidRef = useRef();

  const updateProgress = (e): void => {
    const { duration, currentTime } = e.target;
    const currentHrs = Math.floor(currentTime / 3600);
    const durationHrs = Math.floor(duration / 3600);
    const currentMin = Math.floor(currentTime / 60);
    const currentSec = Math.floor(currentTime - currentMin * 60);
    const durationMin = Math.floor(duration / 60);
    const durationSec = Math.floor(duration - durationMin * 60);
    setCurrentVidTime(
      `${currentHrs > 0 ? currentHrs + ":" : ""}${currentMin}:${currentSec}`
    );
    setVidDurationTime(
      `${durationHrs > 0 ? durationHrs + ":" : ""}${durationMin}:${durationSec}`
    );
  };
  const setProgress = (e) => {
    const { duration, currentTime } = e.target;
    setRange({
      ...range,
      max: String(Math.floor(duration)),
      value: String(Math.floor(currentTime)),
    });
  };
  const customProgress = (e) => {
    const video = document.getElementById("video");
    const {currentTime,duration} = video
  
    const { value } = e.target;
    Math.floor(currentTime )
   
  };
  const controlPlayPause = () => {
    const video = document.getElementById("video");
    const vidState = video.paused || video.ended;
    if (vidState) {
      video.play();
      setPlay_Pause(true);
    }
    if (!vidState) {
      video.pause();
      setPlay_Pause(false);
    }
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
                  <figure>
                    <video
                      controls
                      onTimeUpdate={(e) => {
                        updateProgress(e);
                        setProgress(e);
                      }}
                      className="w-100"
                      ref={vidRef}
                      id="video"
                    >
                      <source src="video/tears-of-steel-battle-clip-medium.mp4" />
                    </video>
                    <div className="container  video-controls">
                      <div
                        className="mb-1 video-controls-progress bg-light rounded-0 position-relative"
                        onClick={setProgress}
                      >
                        {/* <progress
                          id="file"
                          value={range.value}
                          max={range.max}
                          className="d-block w-100 m-0 progress rounded-0 position-absolute"
                          onClick={(e) => console.log(e.target.value)}
                        ></progress> */}
                        <input
                          type="range"
                          className="form-range m-0 mb-2"
                          value={range.value}
                          min="0"
                          max={range.max}
                          step="any"
                          id="customRange3"
                          onChange={customProgress}
                          onDrag={() => console.log("yes")}
                        />
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="d-flex">
                          <button className="btn text-white">
                            <i className="fas fa-step-backward"></i>
                          </button>
                          <button
                            className="btn text-white"
                            onClick={controlPlayPause}
                          >
                            {!play_pause ? (
                              <i className="fas fa-play"></i>
                            ) : (
                              <i className="fas fa-pause"></i>
                            )}
                          </button>
                          <button className="btn text-white">
                            <i className="fas fa-step-forward"></i>
                          </button>
                        </div>
                        <div className="text-white">
                          {currentVidTime}/{vidDurationTime}
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </figure>
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
                  {Cards.map((card) => (
                    <div className="col border-0 right-main-col" key={card}>
                      <div className="card right-main-col-card bg-transparent border-0 d-flex flex-row">
                        <div className="img">
                          <img
                            src="images/Frame 1.png"
                            alt=""
                            className="card-img"
                          />
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
// https://media.w3.org/2010/05/sintel/trailer_hd.mp4

const Cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// https://www.youtube.com/watch?v=ysz5S6PUM-U
// "http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4"
