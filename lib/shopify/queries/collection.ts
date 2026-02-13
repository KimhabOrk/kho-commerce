export const getCollectionQuery = `
  query GetCollection($handle: String!) {
    collection(handle: $handle) {
      handle
      title
      description
      seo {
        title
        description
      }
      updatedAt
    }
  }
`;

export const getCollectionProductsQuery = `
  query GetCollectionProducts($handle: String!, $sortKey: ProductCollectionSortKeys, $reverse: Boolean) {
    collection(handle: $handle) {
      products(first: 100, sortKey: $sortKey, reverse: $reverse) {
        edges {
          node {
            id
            handle
            availableForSale
            title
            description
            descriptionHtml
            options {
              id
              name
              values
            }
            priceRange {
              maxVariantPrice {
                amount
                currencyCode
              }
              minVariantPrice {
                amount
                currencyCode
              }
            }
            variants(first: 250) {
              edges {
                node {
                  id
                  title
                  availableForSale
                  selectedOptions {
                    name
                    value
                  }
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
            featuredImage {
              url
              altText
              width
              height
            }
            images(first: 20) {
              edges {
                node {
                  url
                  altText
                  width
                  height
                }
              }
            }
            seo {
              title
              description
            }
            tags
            updatedAt
          }
        }
      }
    }
  }
`;

export const getCollectionsQuery = `
  query GetCollections {
    collections(first: 100) {
      edges {
        node {
          handle
          title
          description
          image {
            url
            altText
            width
            height
          }
          seo {
            title
            description
          }
          updatedAt
        }
      }
    }
  }
`;
