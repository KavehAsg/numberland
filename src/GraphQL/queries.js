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