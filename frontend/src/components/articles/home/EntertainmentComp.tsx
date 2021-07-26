/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import TitleComp from "../TitleComp";

const EntertainmentComp = (): JSX.Element => {
  return (
    <Wrapper className="section-3 container">
      <TitleComp title="Entertainment" />
      <div className="home-section-flex-wrapper">
        <div className="left">
          <div className="inner">
            <Link href="/articles/entertainment">
              <a className="text-inherit text-decoration-none">
                <img src="/images/Rectangle 19.png" alt="" />
                <p className="big-head fs-3 mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </a>
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="inner">
            <Card image="/images/Rectangle 24.png" />
            <Card image="/images/Rectangle 26.png" />
            <Card image="/images/Rectangle 27.png" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default EntertainmentComp;

const Wrapper = styled.section`
  .home-section-flex-wrapper {
    gap: 2.5rem;
    display: grid;
    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    .left {
      img {
        width: 100%;
        /* max-height: 411px; */
        object-fit: contain;
      }
    }
    .right {
      width: 100%;
      /* max-width: 18rem; */
      display: none;
      .inner {
        .inner-content {
          gap: 1rem;
          img {
            width: 100%;

            height: 269px;
            object-fit: cover;
          }
        }
      }
      @media screen and (min-width: 768px) {
        display: block;
        .inner-content {
          display: grid;
          grid-template-columns: 23rem 60%;
          margin-bottom: 1rem;
        }
      }
    }
  }
`;

const Card = ({ image }: { image: string }) => {
  return (
    <div className="inner-content mb-4">
      <img src={image} className="" />
      <div className="">
        <p className="font-14 fw-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus ornare
          arcu dui lacus.{" "}
        </p>
      </div>
    </div>
  );
};
