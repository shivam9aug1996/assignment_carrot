import { gql } from "@apollo/client";
export const ALL_FILMS_QUERY = gql`
  query AllFilms {
    allFilms {
      films {
        title
        releaseDate
        # Other fields you need
      }
    }
  }
`;
