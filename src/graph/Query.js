import { gql } from "@apollo/client";
const GET_POST_INFO = gql`
  query Postsinfo {
    postsinfo {
      createdAt
      id
      publishedAt
      slug
      title
      updatedAt
      coverphoto {
        coverphotoPosts {
          coverphoto {
            url
          }
        }
      }
      content {
        html
      }
    }
  }
`;
const GET_PHONE_INFO = gql`
  query brands {
    brands {
      title
      id
      slug
      content {
        html
      }
      svg {
        text
      }
      trailer {
        url
      }
    }
  }
`;
const GET_PHONE_INFO2 = gql`
  query brands($slug: String!) {
    brands(where: { slug: $slug }) {
      title
      id
      slug
      content {
        html
      }
      svg {
        text
      }
      trailer {
        url
      }
    }
  }
`;

const GET_POST_INFO2 = gql`
  query Postsinfo($slug: String!) {
    postsinfo(where: { slug: $slug }) {
      id
      slug
      title
      updatedAt
      coverphoto {
        coverphotoPosts {
          coverphoto {
            url
          }
        }
      }
      content {
        html
      }
    }
  }
`;
export { GET_POST_INFO, GET_POST_INFO2, GET_PHONE_INFO, GET_PHONE_INFO2 };
