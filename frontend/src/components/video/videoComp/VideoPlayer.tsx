import React, { useEffect, useState } from "react";

const VdeoPlayer = (): JSX.Element => {
  const [currentVidTime, setCurrentVidTime] = useState("00");
  const [vidDurationTime, setVidDurationTime] = useState("--");
  const [play_pause, setPlay_Pause] = useState(false);
  const [range, setRange] = useState({
    max: 0,
    value: 0,
  });
  const [volumeVal, setVolumeVal] = useState(1);
  const [mute, setMute] = useState(false);

  // FOR THE VIDEO INITIAL RENDER STATE
  useEffect(() => {
    const vid = document.getElementById("video");
    if (!vid.duration) {
      setRange({ ...range, max: 0 });
    } else {
      setRange({ ...range, max: vid.duration });
    }
    (() => {
      const currentHrs = Math.floor(vid.currentTime / 3600);
      const durationHrs = Math.floor(vid.duration / 3600);
      const currentMin = Math.floor(vid.currentTime / 60);
      const currentSec = Math.floor(vid.currentTime - currentMin * 60);
      const durationMin = Math.floor(vid.duration / 60);
      const durationSec = Math.floor(vid.duration - durationMin * 60);

      setCurrentVidTime(
        `${currentHrs > 0 ? currentHrs + ":" : ""}${currentMin}:${currentSec}`
      );
      setVidDurationTime(
        `${
          durationHrs > 0 ? durationHrs + ":" : ""
        }${durationMin}:${durationSec}`
      );
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //KNOW WHEN THE USER  LEFT THE TAB
  useEffect(() => {
    const vid = document.getElementById("video");
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        vid.pause();
        setPlay_Pause(false);
      }
    });
  }, []);
  const updateTimeProgress = (e): void => {
    const { duration, currentTime, ended } = e.target;
    setRange({ ...range, max: duration, value: currentTime });
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
    if (ended) {
      setPlay_Pause(false);
    }
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
  const updatevidCurrentTime = (e) => {
    const video = document.getElementById("video");
    const { value } = e.target;
    video.currentTime = Number(value);
  };
  const fastFoward = () => {
    const vid = document.getElementById("video");
    const currentNum = 1;
    const lengthOfVideo = [];
    for (let index = 0; index < vid.duration; index++) {
      lengthOfVideo.push(index);
    }
    if (vid.ended) {
      vid.currentTime = 0;
    }
    vid.currentTime += lengthOfVideo[currentNum + 1];
  };
  const backWard = () => {
    const vid = document.getElementById("video");
    if (vid.currentTime == 0) {
      vid.currentTime += 0;
    }
    vid.currentTime += -10;
  };
  const alterVolume = (e) => {
    const { value } = e.target;
    const vid = document.getElementById("video");
    setVolumeVal(value);
    vid.volume = Number(value);
    vid.muted = false;
    setMute(false);
  };
  const handleMute = () => {
    const vid = document.getElementById("video");
    if (vid.muted) {
      setMute(false);
      vid.muted = false;
    } else {
      setMute(true);
      vid.muted = true;
    }
  };
  const volumeChange = () => {
    const vid = document.getElementById("video");
    if (vid.volume == 0) {
      setMute(true);
    }
  };
  const fullScreenMode = () => {
    const containerExpand = document.getElementById("fullscreen");
    // Checks if the document is currently in fullscreen mode
    const isFullScreen = function () {
      return !!(
        document.fullscreen ||
        document.webkitIsFullScreen ||
        document.mozFullScreen ||
        document.msFullscreenElement ||
        document.fullscreenElement
      );
    };
    // Fullscreen

    // If fullscreen mode is active...
    if (isFullScreen()) {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.webkitCancelFullScreen)
        document.webkitCancelFullScreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
    } else {
      if (containerExpand.requestFullscreen)
        containerExpand.requestFullscreen();
      else if (containerExpand.mozRequestFullScreen)
        containerExpand.mozRequestFullScreen();
      else if (containerExpand.webkitRequestFullScreen) {
        containerExpand.webkitRequestFullScreen();
      } else if (containerExpand.msRequestFullscreen)
        containerExpand.msRequestFullscreen();
    }
  };
  // SET KDB CONTROL
  useEffect(() => {
    navigator.mediaSession.setActionHandler("previoustrack", backWard);
    navigator.mediaSession.setActionHandler("nexttrack", fastFoward);
    navigator.mediaSession.setActionHandler("play", controlPlayPause);
    navigator.mediaSession.setActionHandler("pause", controlPlayPause);
  }, []);
  return (
    <div>
      <figure id="fullscreen">
        <video
          controls={false}
          onTimeUpdate={updateTimeProgress}
          className="w-100"
          id="video"
          onVolumeChange={volumeChange}
        >
          <source src="video/tears-of-steel-battle-clip-medium.mp4" />
        </video>
        <div className="container video-controls">
          <div className="video-progress">
            <input
              type="range"
              className="px-0 d-block w-100"
              min={0}
              max={Number(range.max)}
              value={Number(range.value)}
              onChange={updatevidCurrentTime}
            />
          </div>
          <div className="d-flex row row-cols-2 row-cols-md-4 video-btn align-items-center">
            <div className="d-flex col play-pause">
              <button className="btn text-white" onClick={backWard}>
                <i className="fas fa-step-backward"></i>
              </button>
              <button className="btn text-white" onClick={controlPlayPause}>
                {!play_pause ? (
                  <i className="fas fa-play"></i>
                ) : (
                  <i className="fas fa-pause"></i>
                )}
              </button>
              <button className="btn text-white" onClick={fastFoward}>
                <i className="fas fa-step-forward"></i>
              </button>
            </div>
            <div className="text-white btn d-flex justify-content-end justify-content-md-center col currenttime-duration">
              {currentVidTime}/{vidDurationTime}
            </div>
            <div className="volume col d-flex justify-content-start">
              <div className="vol-container text-white py-1 px-1 d-flex">
                <button className="btn me-1 text-white" onClick={handleMute}>
                  {mute ? (
                    <i className="fas fa-volume-mute"></i>
                  ) : (
                    <i className="fas fa-volume-up"></i>
                  )}
                </button>
                <input
                  type="range"
                  min={Number(0)}
                  step={Number(0.1)}
                  value={Number(volumeVal)}
                  max={Number(1)}
                  onChange={alterVolume}
                  className=""
                />
              </div>
            </div>
            <div className="zoom-in-out col d-flex justify-content-end">
              <button className="btn text-white" onClick={fullScreenMode}>
                <i className="fas fa-expand"></i>
              </button>
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default VdeoPlayer;
