/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useQuery } from "@apollo/client";
import { GET_ARTICLES } from "apollo/queries/articleQuery";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { IArticles } from "types/articles";
import { articles } from "utils/fakeArticles";

const ArticleNewsComp = (): JSX.Element => {
  // useQuery(GET_ARTICLES, {
  //   onCompleted: (data) => console.log(data),
  //   onError: (err) => console.log(err),
  // });
  useEffect(() => {
    const getArticlesByCategory = async () => {
      try {
        const { data } = await axios.get("/articles");
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getArticlesByCategory();
  }, []);
  return (
    <Wrapper className="section-1 container ">
      <div className="line bg-warning mt-3"></div>
      <div className="d-md-flex home-section-flex-wrapper">
        <div className="left">
          <img src="/images/img1.png" />
          <p className="big-head mt-2 mb-5">Alhaji Yahaya Bello, recieves man of the year.</p>
        </div>
        <div className="right">
          <p className="font-24 mb-4 fw-bold">Cover Stories</p>
          <div className="inner">
            {articles?.slice(0, 4).map((article, i) => (
              <Card key={i} article={article} />
            ))}
            {/* {articles.length > 3 && (
							<div className="text-center my-3">
								<Link href="/articles/news">
									<a className="btn btn-dark">Read more</a>
								</Link>
							</div>
						)} */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ArticleNewsComp;

const Wrapper = styled.section`
  .home-section-flex-wrapper {
    margin-top: 3rem;
    gap: 2.5rem;
    .left {
      flex: 1;
      img {
        width: 100%;
        min-height: 36rem;
        max-height: 36.65rem;
        object-fit: cover;
      }
    }
    .right {
      width: 100%;
      max-width: 18rem;
      line-height: 15px;
      @media screen and (max-width: 768px) {
        margin-top: 1rem;
        max-width: 100%;
      }
    }
  }
`;

const Card = ({ article }: { article: IArticles }) => {
  return (
    <Link href={`/articles/news/${article.id}`}>
      <a className="inner-content text-decoration-none text-inherit">
        <div className="">
          <p className="text-18 fw-bold">{article.title}</p>
          <p className="font-14">{article.excerpt}</p>
        </div>

        <div className="line-thin my-3 bg-warning"></div>
      </a>
    </Link>
  );
};
