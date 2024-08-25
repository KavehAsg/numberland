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
        wbCategory {
            id
            slug
            title
            color {
              hex
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
      wbCategory {
          id
          color {
            hex
          }
          title
          slug
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
query BlogsQuery($after : String , $first : Int , $categorySlug : String!) {
  wbPostsConnection(where: {wbCategory_some: {slug: $categorySlug }} , after : $after , first : $first) {
    edges{
      cursor
      node {
        publishDate
        coverImage {
          url
        }
        title
        slug
          wbCategory {
            id
            slug
            title
            color {
              hex
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
        wbCategory(where : {slug : $categorySlug}) {
            icon{
              url
            }
            title
            description
         }
}
  `

export const GET_SIMILAR_BLOGS = gql`
query MyQuery($category_slug : String , $first : Int , $skip : Int) {
  wbCategory(where: {slug: $category_slug}) {
    wbPost(first: $first , skip: $skip) {
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

export const GET_BLOGS_BY_AUTHOR = gql`
query BlogsQuery($after : String , $first : Int , $authorSlug : String) {
  wbPostsConnection(where: {wbAuthor: {slug: $authorSlug}} , after : $after , first : $first ) {
    edges{
      cursor
      node {
        publishDate
        coverImage {
          url
        }
        title
        slug
          wbCategory {
            id
            slug
            title
            color {
              hex
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

  wbAuthor(where: {slug: $authorSlug}) {
    name
    description
    slug
    profilePicture {
      url
    }
  }
}
  `