/* eslint-disable @next/next/no-img-element */
import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_MAGAZINES = gql`
  {
    magazines {
      title
      cover {
        url
      }
      pdf {
        url
      }
    }
  }
`;

const Test = (): JSX.Element => {
  const { data, loading, error } = useQuery(GET_MAGAZINES);

  console.log(data, loading, error);

  return (
    <div>
      <h1>Test</h1>
      <div>
        <img src={`http://localhost:8000${data?.magazines?.[0].cover?.url}`} alt="" />
      </div>
    </div>
  );
};

export default Test;
