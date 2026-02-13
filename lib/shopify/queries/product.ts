export const getProductQuery = `
  query GetProduct($handle: String!) {
    product(handle: $handle) {
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
`;

export const getProductsQuery = `
  query GetProducts($query: String, $sortKey: ProductSortKeys, $reverse: Boolean) {
    products(first: 100, query: $query, sortKey: $sortKey, reverse: $reverse) {
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
`;

export const getProductRecommendationsQuery = `
  query GetProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
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
`;
