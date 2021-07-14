import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeaderComp = (): JSX.Element => {
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <Image src="/images/logo.svg" alt="logo" width="90" height="90" />
            </a>
          </Link>
          <ul className="nav">
            {navItems.map(({ link, title }, i) => (
              <li className="nav-item" key={i}>
                <Link href={link}>
                  <a className="nav-link">{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <hr className='container'/>
    </header>
  );
};

export default HeaderComp;

const navItems = [
  { title: "Television", link: "/" },
  { title: "Subscribe", link: "/" },
  { title: "About Us", link: "/" },
  { title: "Contact", link: "/" },
];
