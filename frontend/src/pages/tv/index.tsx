/* eslint-disable @next/next/no-img-element */
import TvLayout from "Layout/TvLayout";
import React from "react";
import styled from "styled-components";

const Tv = (): JSX.Element => {
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
                <i className="fas fa-search position-absolute"></i>
              </form>
            </div>
            <div className="tv-body-main-video d-flex flex-column flex-lg-row">
              <div className="left bg-danger">
                <div className="video-container"></div>
                <div className="video-title"></div>
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
