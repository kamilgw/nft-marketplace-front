import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** All available queries on this graphql server */
  DateTime: any;
};

export type MoneyTransaction = {
  __typename?: 'MoneyTransaction';
  amount: Scalars['Float'];
  timestamp: Scalars['DateTime'];
  saleId: Scalars['ID'];
  nftId: Scalars['ID'];
  type: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changeFavouriteState: Scalars['String'];
  createNft?: Maybe<Scalars['String']>;
  createFlatSale?: Maybe<Scalars['String']>;
  buySale?: Maybe<Scalars['String']>;
  cancelSale?: Maybe<Scalars['String']>;
};


export type MutationChangeFavouriteStateArgs = {
  like: Scalars['Boolean'];
  nftId: Scalars['ID'];
};


export type MutationCreateNftArgs = {
  name: Scalars['String'];
  assetUrl: Scalars['String'];
  description: Scalars['String'];
};


export type MutationCreateFlatSaleArgs = {
  amount: Scalars['Float'];
  nftId: Scalars['ID'];
};


export type MutationBuySaleArgs = {
  saleId: Scalars['ID'];
};


export type MutationCancelSaleArgs = {
  saleId: Scalars['ID'];
};

export type Nft = {
  __typename?: 'Nft';
  id: Scalars['ID'];
  name: Scalars['String'];
  assetUrl: Scalars['String'];
  description: Scalars['String'];
  ownerName: Scalars['String'];
  sale: Sale;
  nftIssuer: NftIssuer;
  priceHistory: Array<Sale>;
};

export type NftCategory = {
  __typename?: 'NftCategory';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type NftConnection = {
  __typename?: 'NftConnection';
  edges?: Maybe<Array<Maybe<NftConnectionEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type NftConnectionEdge = {
  __typename?: 'NftConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Nft>;
};

export type NftIssuer = {
  __typename?: 'NftIssuer';
  id: Scalars['ID'];
  avatarUrl: Scalars['String'];
  name: Scalars['String'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  nftIssuer?: Maybe<NftIssuer>;
  nft?: Maybe<Nft>;
  nfts: NftConnection;
  session?: Maybe<Session>;
  sale?: Maybe<Sale>;
  getFavouritesNfts: Array<Scalars['ID']>;
  categories: Array<NftCategory>;
  userByName?: Maybe<Session>;
  transactions?: Maybe<Array<Maybe<MoneyTransaction>>>;
  wallet?: Maybe<Wallet>;
};


export type QueryNftIssuerArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryNftArgs = {
  id: Scalars['ID'];
};


export type QueryNftsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['ID']>;
  favouritedBy?: Maybe<Scalars['ID']>;
};


export type QuerySaleArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetFavouritesNftsArgs = {
  nftIds: Array<Maybe<Scalars['ID']>>;
};


export type QueryUserByNameArgs = {
  username?: Maybe<Scalars['String']>;
};

export type Sale = {
  __typename?: 'Sale';
  id: Scalars['ID'];
  price: Scalars['Float'];
  ownerId: Scalars['ID'];
  buyerId: Scalars['ID'];
  status: Scalars['String'];
  timeAdded: Scalars['DateTime'];
  purchasedOn?: Maybe<Scalars['DateTime']>;
};

export type Session = {
  __typename?: 'Session';
  username: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
};

export type Wallet = {
  __typename?: 'Wallet';
  ownerId: Scalars['ID'];
  balance: Scalars['Float'];
};

export type BuySaleMutationVariables = Exact<{
  saleId: Scalars['ID'];
}>;


export type BuySaleMutation = { __typename?: 'Mutation', buySale?: Maybe<string> };

export type CancelSaleMutationVariables = Exact<{
  saleId: Scalars['ID'];
}>;


export type CancelSaleMutation = { __typename?: 'Mutation', cancelSale?: Maybe<string> };

export type ChangeFavouriteStateMutationVariables = Exact<{
  like: Scalars['Boolean'];
  nftId: Scalars['ID'];
}>;


export type ChangeFavouriteStateMutation = { __typename?: 'Mutation', changeFavouriteState: string };

export type CreateFlatRateSaleMutationVariables = Exact<{
  amount: Scalars['Float'];
  nftId: Scalars['ID'];
}>;


export type CreateFlatRateSaleMutation = { __typename?: 'Mutation', createFlatSale?: Maybe<string> };

export type CreateNftMutationVariables = Exact<{
  name: Scalars['String'];
  assetUrl: Scalars['String'];
  description: Scalars['String'];
}>;


export type CreateNftMutation = { __typename?: 'Mutation', createNft?: Maybe<string> };

export type GetFavouritesNftsQueryVariables = Exact<{
  nftIds: Array<Maybe<Scalars['ID']>> | Maybe<Scalars['ID']>;
}>;


export type GetFavouritesNftsQuery = { __typename?: 'Query', getFavouritesNfts: Array<string> };

export type ListCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListCategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'NftCategory', id: string, name: string }> };

export type ListNftQueryVariables = Exact<{
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['ID']>;
  favouritedBy?: Maybe<Scalars['ID']>;
}>;


export type ListNftQuery = { __typename?: 'Query', nfts: { __typename?: 'NftConnection', edges?: Maybe<Array<Maybe<{ __typename?: 'NftConnectionEdge', node?: Maybe<{ __typename?: 'Nft', id: string, name: string, assetUrl: string, description: string, ownerName: string, sale: { __typename?: 'Sale', id: string, price: number, ownerId: string, timeAdded: any }, nftIssuer: { __typename?: 'NftIssuer', id: string, name: string, avatarUrl: string } }> }>>>, pageInfo?: Maybe<{ __typename?: 'PageInfo', endCursor?: Maybe<string>, startCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean }> } };

export type NftQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type NftQuery = { __typename?: 'Query', nft?: Maybe<{ __typename?: 'Nft', id: string, name: string, assetUrl: string, description: string, ownerName: string, sale: { __typename?: 'Sale', id: string, price: number, ownerId: string, timeAdded: any }, nftIssuer: { __typename?: 'NftIssuer', id: string, name: string, avatarUrl: string }, priceHistory: Array<{ __typename?: 'Sale', id: string, price: number, ownerId: string, purchasedOn?: Maybe<any> }> }> };

export type SessionQueryVariables = Exact<{ [key: string]: never; }>;


export type SessionQuery = { __typename?: 'Query', session?: Maybe<{ __typename?: 'Session', id: string, username: string, email: string }> };

export type TransactionsQueryVariables = Exact<{ [key: string]: never; }>;


export type TransactionsQuery = { __typename?: 'Query', transactions?: Maybe<Array<Maybe<{ __typename?: 'MoneyTransaction', amount: number, timestamp: any, type: string }>>> };

export type UserInfoQueryVariables = Exact<{
  username?: Maybe<Scalars['String']>;
}>;


export type UserInfoQuery = { __typename?: 'Query', userByName?: Maybe<{ __typename?: 'Session', id: string, username: string, email: string }> };

export type WalletQueryVariables = Exact<{ [key: string]: never; }>;


export type WalletQuery = { __typename?: 'Query', wallet?: Maybe<{ __typename?: 'Wallet', ownerId: string, balance: number }> };


export const BuySaleDocument = gql`
    mutation buySale($saleId: ID!) {
  buySale(saleId: $saleId)
}
    `;
export type BuySaleMutationFn = Apollo.MutationFunction<BuySaleMutation, BuySaleMutationVariables>;

/**
 * __useBuySaleMutation__
 *
 * To run a mutation, you first call `useBuySaleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBuySaleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [buySaleMutation, { data, loading, error }] = useBuySaleMutation({
 *   variables: {
 *      saleId: // value for 'saleId'
 *   },
 * });
 */
export function useBuySaleMutation(baseOptions?: Apollo.MutationHookOptions<BuySaleMutation, BuySaleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BuySaleMutation, BuySaleMutationVariables>(BuySaleDocument, options);
      }
export type BuySaleMutationHookResult = ReturnType<typeof useBuySaleMutation>;
export type BuySaleMutationResult = Apollo.MutationResult<BuySaleMutation>;
export type BuySaleMutationOptions = Apollo.BaseMutationOptions<BuySaleMutation, BuySaleMutationVariables>;
export const CancelSaleDocument = gql`
    mutation cancelSale($saleId: ID!) {
  cancelSale(saleId: $saleId)
}
    `;
export type CancelSaleMutationFn = Apollo.MutationFunction<CancelSaleMutation, CancelSaleMutationVariables>;

/**
 * __useCancelSaleMutation__
 *
 * To run a mutation, you first call `useCancelSaleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelSaleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelSaleMutation, { data, loading, error }] = useCancelSaleMutation({
 *   variables: {
 *      saleId: // value for 'saleId'
 *   },
 * });
 */
export function useCancelSaleMutation(baseOptions?: Apollo.MutationHookOptions<CancelSaleMutation, CancelSaleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelSaleMutation, CancelSaleMutationVariables>(CancelSaleDocument, options);
      }
export type CancelSaleMutationHookResult = ReturnType<typeof useCancelSaleMutation>;
export type CancelSaleMutationResult = Apollo.MutationResult<CancelSaleMutation>;
export type CancelSaleMutationOptions = Apollo.BaseMutationOptions<CancelSaleMutation, CancelSaleMutationVariables>;
export const ChangeFavouriteStateDocument = gql`
    mutation changeFavouriteState($like: Boolean!, $nftId: ID!) {
  changeFavouriteState(like: $like, nftId: $nftId)
}
    `;
export type ChangeFavouriteStateMutationFn = Apollo.MutationFunction<ChangeFavouriteStateMutation, ChangeFavouriteStateMutationVariables>;

/**
 * __useChangeFavouriteStateMutation__
 *
 * To run a mutation, you first call `useChangeFavouriteStateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeFavouriteStateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeFavouriteStateMutation, { data, loading, error }] = useChangeFavouriteStateMutation({
 *   variables: {
 *      like: // value for 'like'
 *      nftId: // value for 'nftId'
 *   },
 * });
 */
export function useChangeFavouriteStateMutation(baseOptions?: Apollo.MutationHookOptions<ChangeFavouriteStateMutation, ChangeFavouriteStateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeFavouriteStateMutation, ChangeFavouriteStateMutationVariables>(ChangeFavouriteStateDocument, options);
      }
export type ChangeFavouriteStateMutationHookResult = ReturnType<typeof useChangeFavouriteStateMutation>;
export type ChangeFavouriteStateMutationResult = Apollo.MutationResult<ChangeFavouriteStateMutation>;
export type ChangeFavouriteStateMutationOptions = Apollo.BaseMutationOptions<ChangeFavouriteStateMutation, ChangeFavouriteStateMutationVariables>;
export const CreateFlatRateSaleDocument = gql`
    mutation createFlatRateSale($amount: Float!, $nftId: ID!) {
  createFlatSale(amount: $amount, nftId: $nftId)
}
    `;
export type CreateFlatRateSaleMutationFn = Apollo.MutationFunction<CreateFlatRateSaleMutation, CreateFlatRateSaleMutationVariables>;

/**
 * __useCreateFlatRateSaleMutation__
 *
 * To run a mutation, you first call `useCreateFlatRateSaleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFlatRateSaleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFlatRateSaleMutation, { data, loading, error }] = useCreateFlatRateSaleMutation({
 *   variables: {
 *      amount: // value for 'amount'
 *      nftId: // value for 'nftId'
 *   },
 * });
 */
export function useCreateFlatRateSaleMutation(baseOptions?: Apollo.MutationHookOptions<CreateFlatRateSaleMutation, CreateFlatRateSaleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFlatRateSaleMutation, CreateFlatRateSaleMutationVariables>(CreateFlatRateSaleDocument, options);
      }
export type CreateFlatRateSaleMutationHookResult = ReturnType<typeof useCreateFlatRateSaleMutation>;
export type CreateFlatRateSaleMutationResult = Apollo.MutationResult<CreateFlatRateSaleMutation>;
export type CreateFlatRateSaleMutationOptions = Apollo.BaseMutationOptions<CreateFlatRateSaleMutation, CreateFlatRateSaleMutationVariables>;
export const CreateNftDocument = gql`
    mutation createNft($name: String!, $assetUrl: String!, $description: String!) {
  createNft(name: $name, assetUrl: $assetUrl, description: $description)
}
    `;
export type CreateNftMutationFn = Apollo.MutationFunction<CreateNftMutation, CreateNftMutationVariables>;

/**
 * __useCreateNftMutation__
 *
 * To run a mutation, you first call `useCreateNftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNftMutation, { data, loading, error }] = useCreateNftMutation({
 *   variables: {
 *      name: // value for 'name'
 *      assetUrl: // value for 'assetUrl'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateNftMutation(baseOptions?: Apollo.MutationHookOptions<CreateNftMutation, CreateNftMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNftMutation, CreateNftMutationVariables>(CreateNftDocument, options);
      }
export type CreateNftMutationHookResult = ReturnType<typeof useCreateNftMutation>;
export type CreateNftMutationResult = Apollo.MutationResult<CreateNftMutation>;
export type CreateNftMutationOptions = Apollo.BaseMutationOptions<CreateNftMutation, CreateNftMutationVariables>;
export const GetFavouritesNftsDocument = gql`
    query getFavouritesNfts($nftIds: [ID]!) {
  getFavouritesNfts(nftIds: $nftIds)
}
    `;

/**
 * __useGetFavouritesNftsQuery__
 *
 * To run a query within a React component, call `useGetFavouritesNftsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFavouritesNftsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFavouritesNftsQuery({
 *   variables: {
 *      nftIds: // value for 'nftIds'
 *   },
 * });
 */
export function useGetFavouritesNftsQuery(baseOptions: Apollo.QueryHookOptions<GetFavouritesNftsQuery, GetFavouritesNftsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFavouritesNftsQuery, GetFavouritesNftsQueryVariables>(GetFavouritesNftsDocument, options);
      }
export function useGetFavouritesNftsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFavouritesNftsQuery, GetFavouritesNftsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFavouritesNftsQuery, GetFavouritesNftsQueryVariables>(GetFavouritesNftsDocument, options);
        }
export type GetFavouritesNftsQueryHookResult = ReturnType<typeof useGetFavouritesNftsQuery>;
export type GetFavouritesNftsLazyQueryHookResult = ReturnType<typeof useGetFavouritesNftsLazyQuery>;
export type GetFavouritesNftsQueryResult = Apollo.QueryResult<GetFavouritesNftsQuery, GetFavouritesNftsQueryVariables>;
export const ListCategoriesDocument = gql`
    query listCategories {
  categories {
    id
    name
  }
}
    `;

/**
 * __useListCategoriesQuery__
 *
 * To run a query within a React component, call `useListCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useListCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<ListCategoriesQuery, ListCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListCategoriesQuery, ListCategoriesQueryVariables>(ListCategoriesDocument, options);
      }
export function useListCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCategoriesQuery, ListCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListCategoriesQuery, ListCategoriesQueryVariables>(ListCategoriesDocument, options);
        }
export type ListCategoriesQueryHookResult = ReturnType<typeof useListCategoriesQuery>;
export type ListCategoriesLazyQueryHookResult = ReturnType<typeof useListCategoriesLazyQuery>;
export type ListCategoriesQueryResult = Apollo.QueryResult<ListCategoriesQuery, ListCategoriesQueryVariables>;
export const ListNftDocument = gql`
    query listNft($first: Int!, $after: String, $ownerId: ID, $favouritedBy: ID) {
  nfts(
    first: $first
    after: $after
    ownerId: $ownerId
    favouritedBy: $favouritedBy
  ) {
    edges {
      node {
        id
        name
        assetUrl
        description
        ownerName
        sale {
          id
          price
          ownerId
          timeAdded
        }
        nftIssuer {
          id
          name
          avatarUrl
        }
      }
    }
    pageInfo {
      endCursor
      startCursor
      hasNextPage
      hasPreviousPage
    }
  }
}
    `;

/**
 * __useListNftQuery__
 *
 * To run a query within a React component, call `useListNftQuery` and pass it any options that fit your needs.
 * When your component renders, `useListNftQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListNftQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      ownerId: // value for 'ownerId'
 *      favouritedBy: // value for 'favouritedBy'
 *   },
 * });
 */
export function useListNftQuery(baseOptions: Apollo.QueryHookOptions<ListNftQuery, ListNftQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListNftQuery, ListNftQueryVariables>(ListNftDocument, options);
      }
export function useListNftLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListNftQuery, ListNftQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListNftQuery, ListNftQueryVariables>(ListNftDocument, options);
        }
export type ListNftQueryHookResult = ReturnType<typeof useListNftQuery>;
export type ListNftLazyQueryHookResult = ReturnType<typeof useListNftLazyQuery>;
export type ListNftQueryResult = Apollo.QueryResult<ListNftQuery, ListNftQueryVariables>;
export const NftDocument = gql`
    query nft($id: ID!) {
  nft(id: $id) {
    id
    name
    assetUrl
    description
    ownerName
    sale {
      id
      price
      ownerId
      timeAdded
    }
    nftIssuer {
      id
      name
      avatarUrl
    }
    priceHistory {
      id
      price
      ownerId
      purchasedOn
    }
  }
}
    `;

/**
 * __useNftQuery__
 *
 * To run a query within a React component, call `useNftQuery` and pass it any options that fit your needs.
 * When your component renders, `useNftQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNftQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useNftQuery(baseOptions: Apollo.QueryHookOptions<NftQuery, NftQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NftQuery, NftQueryVariables>(NftDocument, options);
      }
export function useNftLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NftQuery, NftQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NftQuery, NftQueryVariables>(NftDocument, options);
        }
export type NftQueryHookResult = ReturnType<typeof useNftQuery>;
export type NftLazyQueryHookResult = ReturnType<typeof useNftLazyQuery>;
export type NftQueryResult = Apollo.QueryResult<NftQuery, NftQueryVariables>;
export const SessionDocument = gql`
    query session {
  session {
    id
    username
    email
  }
}
    `;

/**
 * __useSessionQuery__
 *
 * To run a query within a React component, call `useSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSessionQuery({
 *   variables: {
 *   },
 * });
 */
export function useSessionQuery(baseOptions?: Apollo.QueryHookOptions<SessionQuery, SessionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SessionQuery, SessionQueryVariables>(SessionDocument, options);
      }
export function useSessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SessionQuery, SessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SessionQuery, SessionQueryVariables>(SessionDocument, options);
        }
export type SessionQueryHookResult = ReturnType<typeof useSessionQuery>;
export type SessionLazyQueryHookResult = ReturnType<typeof useSessionLazyQuery>;
export type SessionQueryResult = Apollo.QueryResult<SessionQuery, SessionQueryVariables>;
export const TransactionsDocument = gql`
    query transactions {
  transactions {
    amount
    timestamp
    type
  }
}
    `;

/**
 * __useTransactionsQuery__
 *
 * To run a query within a React component, call `useTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTransactionsQuery(baseOptions?: Apollo.QueryHookOptions<TransactionsQuery, TransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TransactionsQuery, TransactionsQueryVariables>(TransactionsDocument, options);
      }
export function useTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TransactionsQuery, TransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TransactionsQuery, TransactionsQueryVariables>(TransactionsDocument, options);
        }
export type TransactionsQueryHookResult = ReturnType<typeof useTransactionsQuery>;
export type TransactionsLazyQueryHookResult = ReturnType<typeof useTransactionsLazyQuery>;
export type TransactionsQueryResult = Apollo.QueryResult<TransactionsQuery, TransactionsQueryVariables>;
export const UserInfoDocument = gql`
    query userInfo($username: String) {
  userByName(username: $username) {
    id
    username
    email
  }
}
    `;

/**
 * __useUserInfoQuery__
 *
 * To run a query within a React component, call `useUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserInfoQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUserInfoQuery(baseOptions?: Apollo.QueryHookOptions<UserInfoQuery, UserInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserInfoQuery, UserInfoQueryVariables>(UserInfoDocument, options);
      }
export function useUserInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserInfoQuery, UserInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserInfoQuery, UserInfoQueryVariables>(UserInfoDocument, options);
        }
export type UserInfoQueryHookResult = ReturnType<typeof useUserInfoQuery>;
export type UserInfoLazyQueryHookResult = ReturnType<typeof useUserInfoLazyQuery>;
export type UserInfoQueryResult = Apollo.QueryResult<UserInfoQuery, UserInfoQueryVariables>;
export const WalletDocument = gql`
    query wallet {
  wallet {
    ownerId
    balance
  }
}
    `;

/**
 * __useWalletQuery__
 *
 * To run a query within a React component, call `useWalletQuery` and pass it any options that fit your needs.
 * When your component renders, `useWalletQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWalletQuery({
 *   variables: {
 *   },
 * });
 */
export function useWalletQuery(baseOptions?: Apollo.QueryHookOptions<WalletQuery, WalletQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WalletQuery, WalletQueryVariables>(WalletDocument, options);
      }
export function useWalletLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WalletQuery, WalletQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WalletQuery, WalletQueryVariables>(WalletDocument, options);
        }
export type WalletQueryHookResult = ReturnType<typeof useWalletQuery>;
export type WalletLazyQueryHookResult = ReturnType<typeof useWalletLazyQuery>;
export type WalletQueryResult = Apollo.QueryResult<WalletQuery, WalletQueryVariables>;