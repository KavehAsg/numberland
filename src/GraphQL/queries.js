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
export const GET_BLOG_BY_SLUG = gql`
  query BlogQuery($slug: String!) {
    wbPost(where: {slug: $slug}) {
      coverImage {
        url
      }
      id
      mainContent {
        html
      }
      postCategories {
        ... on WbCategory {
          id
          color {
            hex
          }
          title
          slug
        }
      }
      publishDate
      slug
      title
      wbAuthor {
        description
        name
        slug
        profilePicture {
          url
        }
      }
    }
  }
`

export const GET_BLOGS_BY_CATEGORY = gql`
query BlogsQuery($after : String , $first : Int , $category : String!) {
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

export const GET_SIMILAR_BLOGS = gql`
query MyQuery($category_slug : String , $first : Int) {
  wbCategory(where: {slug: $category_slug}) {
    wbPost(first: $first) {
      coverImage {
        url
      }
      slug
      title
      id
    }
  }
}
  `