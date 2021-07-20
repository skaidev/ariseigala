import React, { ChangeEvent, useEffect, useState } from "react";

interface EventTarget {
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    useCapture?: boolean
  ): void;
  target: { duration: number; currentTime: number; ended: boolean };
}

const VdeoPlayer = ({
  videosrc,
  duration,
}: {
  videosrc: string;
  duration: string;
}): JSX.Element => {
  // @ USESTATES
  const [currentVidTime, setCurrentVidTime] = useState("--");
  const [vidDurationTime, setVidDurationTime] = useState("--");
  const [play_pause, setPlay_Pause] = useState(false);
  const [range, setRange] = useState({
    max: 0,
    value: 0,
  });
  const [disabled, setDisabled] = useState(false);
  const [volumeVal, setVolumeVal] = useState(1);
  const [mute, setMute] = useState(false);

  // Validate if the video prop is null
  useEffect(() => {
    if (!videosrc) {
      setDisabled(true);
      return setRange({ ...range, max: 0 });
    } else {
      setDisabled(false);
      setPlay_Pause(false);
    }
  }, [range, videosrc]);
  //KNOW WHEN THE USER  LEFT THE TAB
  useEffect(() => {
    const vid = document.getElementById("video") as HTMLElement;
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        vid.pause();
        setPlay_Pause(false);
      }
    });
  }, []);
  // Function to Handle the custom video conrtols
  const updateTimeProgress = (e: EventTarget) => {
    const { duration, currentTime, ended } = e.target;
    setRange({ ...range, max: duration, value: currentTime });
    // @ CurrentTime
    const currentHrs = Math.floor(currentTime / 3600);
    const currentMin = Math.floor(currentTime / 60);
    const currentSec = Math.floor(currentTime - currentMin * 60);
    // Formated CurrentTime
    const formatedVidTime = `${currentHrs}:${currentMin}:${currentSec}`;
    setCurrentVidTime(formatedVidTime);
    if (ended) {
      setPlay_Pause(false);
    }
  };
  const controlPlayPause = () => {
    const video = document.getElementById("video") as HTMLElement;
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
  const updatevidCurrentTime = (e: ChangeEvent<HTMLInputElement>) => {
    const video = document.getElementById("video") as HTMLElement;
    const { value } = e.target;
    video.currentTime = Number(value);
  };
  const fastFoward = () => {
    const vid = document.getElementById("video") as HTMLElement;
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
    const vid = document.getElementById("video") as HTMLElement;
    if (vid.currentTime == 0) {
      vid.currentTime += 0;
    }
    vid.currentTime += -10;
  };
  const alterVolume = (e: { target: { value: number } }) => {
    const { value } = e.target;
    const vid = document.getElementById("video") as HTMLElement;
    setVolumeVal(value);
    vid.volume = Number(value);
    vid.muted = false;
    setMute(false);
  };
  const handleMute = () => {
    const vid = document.getElementById("video") as HTMLElement;
    if (vid.muted) {
      setMute(false);
      vid.muted = false;
    } else {
      setMute(true);
      vid.muted = true;
    }
  };
  const volumeChange = () => {
    const vid = document.getElementById("video") as HTMLElement;
    if (vid.volume == 0) {
      setMute(true);
    }
  };
  const fullScreenMode = () => {
    const containerExpand = document.getElementById(
      "fullscreen"
    ) as HTMLElement;
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
  // SET Keyboard  CONTROL
  useEffect(() => {
    navigator.mediaSession.setActionHandler("previoustrack", backWard);
    navigator.mediaSession.setActionHandler("nexttrack", fastFoward);
    navigator.mediaSession.setActionHandler("play", controlPlayPause);
    navigator.mediaSession.setActionHandler("pause", controlPlayPause);
  }, []);
  useEffect(() => {
    const vid = document.getElementById("video") as HTMLElement;
    vid.addEventListener("timeupdate", updateTimeProgress);
    vid.addEventListener("volumechange", volumeChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (process.browser) {
      const { duration, currentTime } = document.getElementById(
        "video"
      ) as HTMLVideoElement;
      setRange({ ...range, max: duration, value: currentTime });
      const checked_Duartion = Number(duration);
      const durationHrs = Math.floor(checked_Duartion / 3600);
      const durationMin = Math.floor(checked_Duartion / 60);
      const durationSec = Math.floor(checked_Duartion - durationMin * 60);
      const formatedVidDuration = `${Number(durationHrs)}:${Number(
        durationMin
      )}:${Number(durationSec)}`;
      setVidDurationTime(formatedVidDuration);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <figure id="fullscreen">
        <video controls={false} className="w-100" id="video" src={videosrc} />
        <div className="container video-controls">
          <div className="video-progress">
            <input
              type="range"
              className="px-0 d-block w-100"
              min={0}
              max={range.max ? Number(range.max) : "0"}
              value={Number(range.value)}
              onChange={updatevidCurrentTime}
              disabled={disabled}
            />
          </div>
          <div className="d-flex row row-cols-2 row-cols-md-4 video-btn align-items-center">
            <div className="d-flex col play-pause">
              <button
                disabled={disabled}
                className="btn text-white px-3"
                onClick={backWard}
              >
                <i className="fas fa-step-backward"></i>
              </button>
              <button
                disabled={disabled}
                className="btn text-white px-3"
                onClick={controlPlayPause}
              >
                {!play_pause ? (
                  <i className="fas fa-play"></i>
                ) : (
                  <i className="fas fa-pause"></i>
                )}
              </button>
              <button
                disabled={disabled}
                className="btn text-white px-3"
                onClick={fastFoward}
              >
                <i className="fas fa-step-forward"></i>
              </button>
            </div>
            <div className="text-white btn d-flex justify-content-end justify-content-md-center col currenttime-duration">
              <time>{currentVidTime}</time>/
              <time>{duration ? duration : vidDurationTime}</time>
            </div>
            <div className="volume col d-flex justify-content-start">
              <div className="vol-container text-white py-1 px-1 d-flex">
                <button
                  disabled={disabled}
                  className="btn me-1 text-white"
                  onClick={handleMute}
                >
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
              <button
                disabled={disabled}
                className="btn text-white px-3"
                onClick={fullScreenMode}
              >
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
