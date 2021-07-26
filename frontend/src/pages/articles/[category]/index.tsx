/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import Advertisement from "components/Advertisement";
import SubscribeComp from "components/articles/home/SubscribeComp";
import { categories } from "components/articles/ArticleHeaderComp";

import ArticleLayout from "Layout/ArticleLayout";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const article = (): JSX.Element => {
  const { query } = useRouter();
  const categoryLink = query?.category;
  const category = categories.find((cat) => cat.link === categoryLink);

  return (
    <ArticleLayout>
      <Wrapper>
        <section className="first-article mb-4">
          <div className="container first-article-main">
            <div className="text-center first-article-main-title mb-3">
              <h1 className="georgia">{category?.name}</h1>
              <div className="line-thin w-75 mx-auto bg-warning"></div>
            </div>
            <div className="section-main">
              <div className="left">
                <div className="inner">
                  <div className="mb-2">
                    <Card />
                  </div>
                  <div className="mb-2">
                    <Card />
                  </div>
                </div>
              </div>
              <div className="center">
                <div className="inner">
                  <img src="/images/Rectangle 28.png" alt="" />
                  <div className="inner-content">
                    <p className="font-18 line-height-1 fw-400 my-2">
                      Rutrum ac, placerat purus aliquam nulla magna nisl
                      volutpat a. At lectus malesuada sed urna a amet non.
                    </p>

                    <div className="line-thin bg-dark w-25 my-3" />
                    <p>By Emeka Alice</p>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="inner">
                  <div className="mb-2">
                    <Card />
                  </div>
                  <div className="mb-2">
                    <Card />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mb-3 py-1">
          <Advertisement />
        </div>
        <section className="second-article mb-5">
          <div className="container second-article-main">
            <div className="second-article-main-head py-3 mb-4 text-center">
              <h1 className="pb-3 d-inline-block fw-bold  border-bottom border-warning georgia border-2">
                Sub-heading
              </h1>
            </div>
            <div className="second-article-main-body">
              <div className="second-article-row row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                {num.slice(1).map((e) => (
                  <div className="second-article-col col" key={e}>
                    <div className="second-article-card card rounded-0 border-0">
                      <div className="second-article-card-img card-img rounded-0 mb-2">
                        <img
                          loading="lazy"
                          src="/images/Rectangle 27.png"
                          alt=""
                        />
                      </div>
                      <div className="card-body p-0">
                        <p className="p-0 mb-2 georgia fw-bold">
                          Lacus in quam odio lectus. Nam tellus commodo metus.
                        </p>
                        <span className="d-inline-block border-dark py-1 border-top border-2">
                          By Emeka Alice
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* ---- @START --------*/}
        <section className="second-article mb-5">
          <div className="container second-article-main">
            <div className="second-article-main-head py-3 mb-4 text-center">
              <h1 className="pb-3 d-inline-block fw-bold  border-bottom border-warning georgia border-2">
                Sub-heading
              </h1>
            </div>
            <div className="second-article-main-body">
              <div className="second-article-row row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                {num.slice(1).map((e) => (
                  <div className="second-article-col col" key={e}>
                    <div className="second-article-card card rounded-0 border-0">
                      <div className="second-article-card-img card-img rounded-0 mb-2">
                        <img
                          loading="lazy"
                          src="/images/Rectangle 27.png"
                          alt=""
                        />
                      </div>
                      <div className="card-body p-0">
                        <p className="p-0 mb-2 georgia fw-bold">
                          Lacus in quam odio lectus. Nam tellus commodo metus.
                        </p>
                        <span className="d-inline-block border-dark py-1 border-top border-2">
                          By Emeka Alice
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* ----- ** @STOP  **-------  */}
        <div>
          <Advertisement />
        </div>
        {/* ---- @START --------*/}
        <section className="second-article mb-5">
          <div className="container second-article-main">
            <div className="second-article-main-head py-3 mb-4 text-center">
              <h1 className="pb-3 d-inline-block fw-bold  border-bottom border-warning georgia border-2">
                Sub-heading
              </h1>
            </div>
            <div className="second-article-main-body">
              <div className="second-article-row row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                {num.slice(1).map((e) => (
                  <div className="second-article-col col" key={e}>
                    <div className="second-article-card card rounded-0 border-0">
                      <div className="second-article-card-img card-img rounded-0 mb-2">
                        <img
                          loading="lazy"
                          src="/images/Rectangle 27.png"
                          alt=""
                        />
                      </div>
                      <div className="card-body p-0">
                        <p className="p-0 mb-2 georgia font-18 line-height-1 fw-bold">
                          Lacus in quam odio lectus. Nam tellus commodo metus.
                        </p>
                        <span className="d-inline-block border-dark py-1 border-top border-2">
                          By Emeka Alice
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* ----- ** @STOP  **-------  */}
        <div>
          <SubscribeComp />
        </div>
      </Wrapper>
    </ArticleLayout>
  );
};

export default article;

const Wrapper = styled.div`
  .first-article {
    .section-main {
      display: grid;
      min-height: 90vh;
      gap: 1rem;
      img {
        width: 100%;
      }
      @media screen and (min-width: 768px) {
        grid-template-columns: 20% 60% 20%;
      }
      .left {
        /* background-color: yellow; */
      }
      .center {
        /* background-color: yellowgreen; */
      }
      .right {
        /* background-color: pink; */
      }
    }
  }
  .second-article {
    &-main {
      &-body {
        .second-article-row {
          .second-article-col {
            .second-article-card {
              &-img {
                min-height: 16rem;
                position: relative;
                overflow: hidden;
                width: 100%;
                img {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
              }
            }
          }
        }
      }
    }
  }
`;

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Card = () => {
  return (
    <div className="col one-col">
      <div className="card border-0 rounded-0 one-card">
        <div className="one-card-img rounded-0 card-img mb-2">
          <img loading="lazy" src="/images/Rectangle 28.png" alt="" />
        </div>
        <div className="one-card-body card-body p-0">
          <p className="georgia p-0 mb-2 fw-bold line-height-1">
            Lacus in quam odio lectus. Nam tellus commodo metus.
          </p>
          <div className="d-inline-block py-1 border-top border-dark border-1">
            By Emeka Alice
          </div>
        </div>
      </div>
    </div>
  );
};
