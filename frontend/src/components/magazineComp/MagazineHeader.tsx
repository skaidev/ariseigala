/* eslint-disable @next/next/no-img-element */
import { CategoryNavComp } from "components/articles/ArticleHeaderComp";
import Logo from "components/logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MagazineHeader = (): JSX.Element => {
  const [toggle, setToggle] = useState(false);
  const [minMenu, setMinMenu] = useState(false);
  const { query } = useRouter();
  const category = query?.category;
  useEffect(() => {
    const news = document.getElementById("news");
    if (category === undefined) {
      news?.classList.add("active");
    } else if (category === "news") {
      news?.classList.add("active");
    } else {
      news?.classList.remove("active");
    }
    console.log(news);
  }, [category]);

  return (
    <header className=" bg-dark">
      <div className="container">
        <nav className="navbar border-bottom border-white" role="navigation">
          <Link href="/magazine">
            <a className="navbar-brand p-0" aria-label="logo">
              <Logo />
            </a>
          </Link>
          <button className="btn d-block d-md-none text-white border border-white" onClick={() => setMinMenu((c) => !c)} role="button" aria-label="open menu">
            <i className="fas fa-bars" aria-hidden="true"></i>
          </button>
          <div className="d-none d-md-flex">
            <ul className="d-flex ">
              {navlist.map((item, i) => (
                <li className="nav-item text-center" key={i}>
                  <Link href={item.toLowerCase() === "home" ? "/" : item.toLowerCase()}>
                    <a className="nav-link d-inline-block text-white px-3 py-2">{item}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        {minMenu && (
          <div className="d-block d-md-none">
            <ul className="navbar-nav">
              {navlist.map((item, i) => (
                <li className="nav-item text-center" key={i}>
                  <Link href={item.toLowerCase() === "home" ? "/" : item.toLowerCase()}>
                    <a className="nav-link text-white d-inline-block px-3 py-2">{item}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className=" py-2 d-block d-lg-flex container mc  mx-auto">
          <div className="col d-md-none bg-gradient" onClick={() => setToggle(!toggle)}>
            <i className="fas d-block text-white fa-caret-square-down fs-2 "></i>
          </div>
          <TvNav className="navbar text-light ">
            <ul className="nav flex-column flex-md-row flex-wrap justify-content-md-center">
              <CategoryNavComp />
            </ul>
          </TvNav>
        </div>
      </div>
    </header>
  );
};

export default MagazineHeader;

const TvNav = styled.nav`
  .nav-link {
    color: inherit;
    &.active {
      font-weight: bold;
      transition: 0.5s ease-in-out;
    }
  }
`;

const navlist = ["Home", "Subscribe", "Tv", "contact"];
