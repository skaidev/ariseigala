/* eslint-disable @next/next/no-img-element */
import "aos";
import Logo from "components/logo/Logo";
import Link from "next/link";
import React, { useState } from "react";

const MagazineHeader = (): JSX.Element => {
  const [col, setCol] = useState(false);
  const [minMenu, setMinMenu] = useState(false);

  return (
    <header className=" bg-dark">
      <div className="container">
        <nav className="navbar border-bottom border-white">
          <Link href="/magazine">
            <a className="navbar-brand p-0">
              <Logo />
            </a>
          </Link>
          <button
            className="btn d-block d-md-none text-white border border-white"
            onClick={() => setMinMenu((c) => !c)}
            role="button"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="d-none d-md-flex">
            <ul className="d-flex ">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link text-white">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link text-white">Subscribe</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link text-white">Tv</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link text-white">contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {minMenu && (
          <div className="d-block d-md-none">
            <ul className="navbar-nav">
              <li className="nav-item text-center fs-5">
                <Link href="/magazine">
                  <a className="nav-link text-white">Home</a>
                </Link>
              </li>
              <li className="nav-item text-center fs-5">
                <Link href="/magazine">
                  <a className="nav-link text-white">Home</a>
                </Link>
              </li>
              <li className="nav-item text-center fs-5">
                <Link href="/magazine">
                  <a className="nav-link text-white">Home</a>
                </Link>
              </li>
              <li className="nav-item text-center fs-5">
                <Link href="/magazine">
                  <a className="nav-link text-white">Home</a>
                </Link>
              </li>
            </ul>
          </div>
        )}
        <div className="row py-2 d-block d-lg-flex container mc text-white mx-auto">
          <div
            className="col d-md-none bg-gradient"
            onClick={() => setCol(!col)}
          >
            <i className="fas d-block fa-caret-square-down fs-2 text-white"></i>
          </div>
          <div className={`col mb-2 mb-lg-0 ${col ? "" : "d-none"} d-md-flex`}>
            News
          </div>
          <div className={`col mb-2 mb-lg-0 ${col ? "" : "d-none"} d-md-flex`}>
            Culture and tourism
          </div>
          <div className={`col mb-2 mb-lg-0 ${col ? "" : "d-none"} d-md-flex`}>
            Education
          </div>
          <div className={`col mb-2 mb-lg-0 ${col ? "" : "d-none"} d-md-flex`}>
            Entertainment
          </div>
          <div className={`col mb-2 mb-lg-0 ${col ? "" : "d-none"} d-md-flex`}>
            Opinion
          </div>
          <div className={`col mb-2 mb-lg-0 ${col ? "" : "d-none"} d-md-flex`}>
            Politics
          </div>
          <div className={`col mb-2 mb-lg-0 ${col ? "" : "d-none"} d-md-flex`}>
            Business
          </div>
          <div className={`col mb-2 mb-lg-0 ${col ? "" : "d-none"} d-md-flex`}>
            Religion
          </div>
          <div className={`col mb-2 mb-lg-0 ${col ? "" : "d-none"} d-md-flex`}>
            Technology
          </div>
        </div>
      </div>
    </header>
  );
};

export default MagazineHeader;
