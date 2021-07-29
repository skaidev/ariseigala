/* eslint-disable @next/next/no-img-element */
import { gql, useQuery } from "@apollo/client";

import React from "react";
import { IArticle } from "types/interface";

const GET_ARTICLES = gql`
  query {
    magazines {
      id
      issue
      cover {
        url
      }
      pdf {
        url
      }
      title
    }
  }
`;

const Test = (): JSX.Element => {
  const { data, loading, error } = useQuery(GET_ARTICLES);

  if (loading) return <p>Loading....</p>;

  if (error) return <pre>{error?.message}</pre>;
  console.log(data);

  return (
    <div>
      <h1>Test</h1>
      <ul>
        {data?.articles?.map((article: any, i: number) => (
          <li key={i}>
            <img src={`http://localhost:8000${article?.cover?.url}`} alt="" />
            <p>{article.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
