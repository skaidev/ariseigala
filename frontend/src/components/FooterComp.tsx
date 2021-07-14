import React from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from './Icon';                                     

const FooterComp = (): JSX.Element => {
  return (
    <footer className="">
        <div className="footer_container container text-center">
          <Link href="/">
            <a className="navbar-brand">
              <Image src="/images/logo.svg" alt="logo" width="90" height="90" />
            </a>
          </Link>
          <div className='footer_social_icons'>
            <Icon name='instagram' size={20}  color='yellow'  className='me-3' props/>
            <Icon name='youtube' size={20}  color='yellow'  className='me-3' props/>
            <Icon name='facebook' size={20}  color='yellow'  className='me-3' props/>
            <Icon name='twitter' size={20} color='yellow'   className='me-3' props/>
          </div>
          <div className='container border d-flex flex-column align-items-center'>
              <ul className="nav">
                {navItems.map(({ link, title }, i) => (
                  <li className="nav-item" key={i}>
                    <Link href={link}>
                      <a className="nav-link">{title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className='fs-4 nav'>
                  <li className='me-4'>Magazine</li>
                  <li className='me-4'>Television</li>
              </ul>
          </div>
          <div>
              <p>© Arise Igala 2021 All Rights Reserved. Use of this site constitutes acceptance of our Terms of Service, Privacy Policy and Do Not Sell My Personal Information.
                Arise Igala may receive compensation for some links to products and services on this website. Offers may be subject to change without notice.
                This site is protected by reCAPTCHA and the Google Privacy Policy Terms of Service apply.
              </p>
          </div>

        </div>
    </footer>
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
