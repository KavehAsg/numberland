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
query BlogsQuery( $first : Int , $skip : Int) {
  wbPostsConnection( first : $first , skip : $skip) {
    edges{
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
    aggregate {
      count
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
query BlogsQuery($skip : Int , $first : Int , $categorySlug : String!) {
  wbPostsConnection(where: {wbCategory_some: {slug: $categorySlug }} , skip : $skip , first : $first) {
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
    aggregate {
      count
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
query BlogsQuery( $first : Int , $skip : Int , $authorSlug : String) {
  wbPostsConnection(where: {wbAuthor: {slug: $authorSlug}} , skip : $skip , first : $first ) {
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
    aggregate {
      count
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

export const GET_APPS = gql`
  query BlogQuery {
    apps {
      appName
      id
      slug
        appIcon {
          id
          url
        }
   }
  }
`

export const GET_TEMP_NUMBERS_BY_APP = gql`
query BlogQuery($appSlug : String) {
  countries(where: {tempNumbers_some: {referals_some: {App: {slug: $appSlug}}}}) 
  {
    id
    countryFlag {
      url
    }
    countryName
    slug
    countryCode
    price
    tempNumbers {
      number
    }
  }
}
`