import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterComp = (): JSX.Element => {
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

          <ul className=''>
              <li>Magazine</li>
              <li>Television</li>
          </ul>

        </div>
      </nav>
    </header>
  );
};

export default FooterComp;

const navItems = [
  { title: "News", link: "/" },
  { title: "Culture and tourism", link: "/" },
  { title: "Education", link: "/" },
  { title: "Entertainment", link: "/" },
  { title: "Opinion", link: "/" },
  { title: "Politics", link: "/" },
  { title: "Business", link: "/" },
  { title: "Religion", link: "/" },
  { title: "Technology", link: "/" },
];
