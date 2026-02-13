export const getPageQuery = `
  query GetPage($handle: String!) {
    pageByHandle(handle: $handle) {
      id
      title
      handle
      body
      bodySummary
      seo {
        title
        description
      }
      createdAt
      updatedAt
    }
  }
`;

export const getPagesQuery = `
  query GetPages {
    pages(first: 100) {
      edges {
        node {
          id
          title
          handle
          body
          bodySummary
          seo {
            title
            description
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`;
