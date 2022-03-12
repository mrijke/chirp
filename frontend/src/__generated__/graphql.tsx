import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type Chirp = {
  __typename?: 'Chirp';
  author: User;
  authorId: Scalars['Int'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  id: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ChirpListRelationFilter = {
  every?: InputMaybe<ChirpWhereInput>;
  none?: InputMaybe<ChirpWhereInput>;
  some?: InputMaybe<ChirpWhereInput>;
};

export type ChirpOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ChirpOrderByWithRelationInput = {
  author?: InputMaybe<UserOrderByWithRelationInput>;
  authorId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum ChirpScalarFieldEnum {
  AuthorId = 'authorId',
  Content = 'content',
  CreatedAt = 'createdAt',
  Deleted = 'deleted',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type ChirpWhereInput = {
  AND?: InputMaybe<Array<ChirpWhereInput>>;
  NOT?: InputMaybe<Array<ChirpWhereInput>>;
  OR?: InputMaybe<Array<ChirpWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<IntFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deleted?: InputMaybe<BoolFilter>;
  id?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ChirpWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  chirp?: Maybe<Chirp>;
  chirps: Array<Chirp>;
};


export type QueryChirpArgs = {
  where: ChirpWhereUniqueInput;
};


export type QueryChirpsArgs = {
  cursor?: InputMaybe<ChirpWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChirpScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChirpOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChirpWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type UserCount = {
  __typename?: 'UserCount';
  chirps: Scalars['Int'];
};

export type UserOrderByWithRelationInput = {
  chirps?: InputMaybe<ChirpOrderByRelationAggregateInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  chirps?: InputMaybe<ChirpListRelationFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type ChirpListItemFragment = { __typename?: 'Chirp', id: string, createdAt: any, updatedAt: any, title: string, content: string, author: { __typename?: 'User', id: number, name: string } };

export type ChirpsListQueryVariables = Exact<{ [key: string]: never; }>;


export type ChirpsListQuery = { __typename?: 'Query', chirps: Array<{ __typename?: 'Chirp', id: string, createdAt: any, updatedAt: any, title: string, content: string, author: { __typename?: 'User', id: number, name: string } }> };

export const ChirpListItemFragmentDoc = gql`
    fragment ChirpListItem on Chirp {
  id
  author {
    id
    name
  }
  createdAt
  updatedAt
  title
  content
}
    `;
export const ChirpsListDocument = gql`
    query ChirpsList {
  chirps(where: {deleted: {equals: false}}) {
    ...ChirpListItem
  }
}
    ${ChirpListItemFragmentDoc}`;

/**
 * __useChirpsListQuery__
 *
 * To run a query within a React component, call `useChirpsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useChirpsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChirpsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useChirpsListQuery(baseOptions?: Apollo.QueryHookOptions<ChirpsListQuery, ChirpsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChirpsListQuery, ChirpsListQueryVariables>(ChirpsListDocument, options);
      }
export function useChirpsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChirpsListQuery, ChirpsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChirpsListQuery, ChirpsListQueryVariables>(ChirpsListDocument, options);
        }
export type ChirpsListQueryHookResult = ReturnType<typeof useChirpsListQuery>;
export type ChirpsListLazyQueryHookResult = ReturnType<typeof useChirpsListLazyQuery>;
export type ChirpsListQueryResult = Apollo.QueryResult<ChirpsListQuery, ChirpsListQueryVariables>;