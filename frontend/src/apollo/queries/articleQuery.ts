import { gql } from "@apollo/client";

export const GET_ARTICLES_BY_SLUG = gql`
  query ArticleBySlug($slug: String!) {
    articles(where: { slug: $slug }) {
      id
      title
      createdAt
      category
      image {
        url
      }
      author {
        firstname
        lastname
      }
      body
    }
  }
`;

export const GET_ARTICLES = gql`
  {
    articles {
      id
      title
      createdAt
      image {
        url
      }
      excerpt
    }
  }
`;
