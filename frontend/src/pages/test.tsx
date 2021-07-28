/* eslint-disable @next/next/no-img-element */
import { gql, useQuery } from "@apollo/client";

import React from "react";
import { IArticle } from "types/interface";

const GET_ARTICLES = gql`
  query {
    articles(sort: "createdAt:DESC") {
      id
      createdAt
      title
      slug
      description
      banner
      image {
        url
      }
      category {
        name
        slug
      }
    }
  }
`;

const Test = (): JSX.Element => {
  const { data, loading, error } = useQuery(GET_ARTICLES);

  if (loading) return <p>Loading....</p>;

  if (error) return <pre>{error?.message}</pre>;

  return (
    <div>
      <h1>Test</h1>
      <ul>
        {data?.articles?.map((article: IArticle, i: number) => (
          <li key={i}>
            <img src={`http://localhost:8000${article?.image?.url}`} alt="" />
            <p>{article.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
