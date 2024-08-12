import { gql } from '@apollo/client';

export const GET_FOOTER = gql`
query FooterQuery {
    countries {
      id
      countryName
      slug
    }
    apps {
      appName
      id
      slug
    }
  }
    `

export const GET_BLOGS = gql`
query BlogsQuery($after : String , $first : Int) {
  wbPostsConnection(after : $after , first : $first) {
    edges{
      cursor
      node {
        publishDate
        coverImage {
          url
        }
        title
        slug
        postCategories {
          ... on WbCategory {
            id
            slug
            title
            color {
              hex
            }
          }
        }
        preview
        id
      }
    }
    pageInfo{
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
  `

