/* eslint-disable @next/next/no-img-element */
import Logo from "components/logo/Logo";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

const MagazineHeader = (): JSX.Element => {
  const [col, setCol] = useState(false);
  const [minMenu, setMinMenu] = useState(false);

  return (
    <header className="">
      <div className="container">
        <nav className="navbar border-bottom  border-3" role="navigation">
          <Link href="/magazine">
            <a className="navbar-brand p-0" aria-label="logo">
              <Logo />
            </a>
          </Link>
          <button
            className="btn d-block d-md-none  border border-white"
            onClick={() => setMinMenu((c) => !c)}
            role="button"
            aria-label="open menu"
          >
            <i className="fas fa-bars" aria-hidden="true"></i>
          </button>
          <div className="d-none d-md-flex">
            <List className="d-flex">
              {navitems.map((item) => (
                <li className="nav-item" key={item.id}>
                  <Link href="/">
                    <a className="nav-link ">{item.txt}</a>
                  </Link>
                </li>
              ))}
            </List>
          </div>
        </nav>
        {minMenu && (
          <div className="d-block d-md-none">
            <ul className="navbar-nav">
              {navitems.map((item) => (
                <li className="nav-item text-center fs-5" key={item.id}>
                  <Link href="/">
                    <a className="nav-link ">{item.txt}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="row py-2 d-block d-lg-flex container mc  mx-auto">
          <div
            className="col d-md-none bg-gradient"
            onClick={() => setCol(!col)}
          >
            <i className="fas d-block fa-caret-square-down fs-2 "></i>
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

const navitems = [
  { id: 1, txt: "Television" },
  { id: 2, txt: "Magazine" },
  { id: 3, txt: "Subscribe" },
  { id: 4, txt: "About Us" },
  { id: 5, txt: "Contact" },
];

const List = styled.ul`
  list-style: none;
`;
