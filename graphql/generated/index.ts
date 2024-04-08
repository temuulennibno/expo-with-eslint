import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type AnimeGenre = {
  __typename?: 'AnimeGenre';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type AnimeGenreUpdateInput = {
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAnimeGenre: AnimeGenre;
  deleteAnimeGenre: AnimeGenre;
  registerUser: User;
  updateAnimeGenre: AnimeGenre;
};


export type MutationCreateAnimeGenreArgs = {
  title: Scalars['String']['input'];
};


export type MutationDeleteAnimeGenreArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRegisterUserArgs = {
  input: UserRegisterInput;
};


export type MutationUpdateAnimeGenreArgs = {
  input: AnimeGenreUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  animeGenre?: Maybe<AnimeGenre>;
  animeGenres: Array<AnimeGenre>;
  getUser?: Maybe<User>;
  getUsers: Array<Maybe<User>>;
};


export type QueryAnimeGenreArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
};

export type UserRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AnimeGenresQueryVariables = Exact<{ [key: string]: never; }>;


export type AnimeGenresQuery = { __typename?: 'Query', animeGenres: Array<{ __typename?: 'AnimeGenre', id: string, title: string, createdAt: any }> };

export type AnimeGenreQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type AnimeGenreQuery = { __typename?: 'Query', animeGenre?: { __typename?: 'AnimeGenre', id: string, title: string, createdAt: any } | null };


export const AnimeGenresDocument = gql`
    query AnimeGenres {
  animeGenres {
    id
    title
    createdAt
  }
}
    `;

/**
 * __useAnimeGenresQuery__
 *
 * To run a query within a React component, call `useAnimeGenresQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnimeGenresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnimeGenresQuery({
 *   variables: {
 *   },
 * });
 */
export function useAnimeGenresQuery(baseOptions?: Apollo.QueryHookOptions<AnimeGenresQuery, AnimeGenresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnimeGenresQuery, AnimeGenresQueryVariables>(AnimeGenresDocument, options);
      }
export function useAnimeGenresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnimeGenresQuery, AnimeGenresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnimeGenresQuery, AnimeGenresQueryVariables>(AnimeGenresDocument, options);
        }
export function useAnimeGenresSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AnimeGenresQuery, AnimeGenresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AnimeGenresQuery, AnimeGenresQueryVariables>(AnimeGenresDocument, options);
        }
export type AnimeGenresQueryHookResult = ReturnType<typeof useAnimeGenresQuery>;
export type AnimeGenresLazyQueryHookResult = ReturnType<typeof useAnimeGenresLazyQuery>;
export type AnimeGenresSuspenseQueryHookResult = ReturnType<typeof useAnimeGenresSuspenseQuery>;
export type AnimeGenresQueryResult = Apollo.QueryResult<AnimeGenresQuery, AnimeGenresQueryVariables>;
export const AnimeGenreDocument = gql`
    query AnimeGenre($id: ID!) {
  animeGenre(id: $id) {
    id
    title
    createdAt
  }
}
    `;

/**
 * __useAnimeGenreQuery__
 *
 * To run a query within a React component, call `useAnimeGenreQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnimeGenreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnimeGenreQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAnimeGenreQuery(baseOptions: Apollo.QueryHookOptions<AnimeGenreQuery, AnimeGenreQueryVariables> & ({ variables: AnimeGenreQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnimeGenreQuery, AnimeGenreQueryVariables>(AnimeGenreDocument, options);
      }
export function useAnimeGenreLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnimeGenreQuery, AnimeGenreQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnimeGenreQuery, AnimeGenreQueryVariables>(AnimeGenreDocument, options);
        }
export function useAnimeGenreSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AnimeGenreQuery, AnimeGenreQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AnimeGenreQuery, AnimeGenreQueryVariables>(AnimeGenreDocument, options);
        }
export type AnimeGenreQueryHookResult = ReturnType<typeof useAnimeGenreQuery>;
export type AnimeGenreLazyQueryHookResult = ReturnType<typeof useAnimeGenreLazyQuery>;
export type AnimeGenreSuspenseQueryHookResult = ReturnType<typeof useAnimeGenreSuspenseQuery>;
export type AnimeGenreQueryResult = Apollo.QueryResult<AnimeGenreQuery, AnimeGenreQueryVariables>;