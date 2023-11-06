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
};

export type LinkOutputDto = {
  __typename?: 'LinkOutputDTO';
  link: Scalars['String']['output'];
  platform: Scalars['String']['output'];
};

export type LinkType = {
  link: Scalars['String']['input'];
  platform: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addDetails: SuccessMessage;
  login: Token;
  signup: Token;
};


export type MutationAddDetailsArgs = {
  userDetailsInput: UserDetailsInput;
};


export type MutationLoginArgs = {
  userAuthInput: UserAuthInput;
};


export type MutationSignupArgs = {
  userAuthInput: UserAuthInput;
};

export type Query = {
  __typename?: 'Query';
  Me: User;
  getDetails: UserOutputDto;
};

/** message */
export type SuccessMessage = {
  __typename?: 'SuccessMessage';
  success: Scalars['String']['output'];
};

/** user */
export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  sub: Scalars['String']['output'];
};

export type UserAuthInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserDetailsInput = {
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  links: Array<LinkType>;
};

/** User */
export type UserOutputDto = {
  __typename?: 'UserOutputDTO';
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  links: Array<LinkOutputDto>;
};

export type Token = {
  __typename?: 'token';
  token: Scalars['String']['output'];
};

export type LoginMutationVariables = Exact<{
  userAuthInput: UserAuthInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'token', token: string } };

export type SignUpMutationVariables = Exact<{
  userAuthInput: UserAuthInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signup: { __typename?: 'token', token: string } };

export type AddDetailsMutationVariables = Exact<{
  userDetailsInput: UserDetailsInput;
}>;


export type AddDetailsMutation = { __typename?: 'Mutation', addDetails: { __typename?: 'SuccessMessage', success: string } };

export type GetDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDetailsQuery = { __typename?: 'Query', getDetails: { __typename?: 'UserOutputDTO', firstName: string, lastName: string, links: Array<{ __typename?: 'LinkOutputDTO', platform: string, link: string }> } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', Me: { __typename?: 'User', sub: string, email: string } };


export const LoginDocument = gql`
    mutation Login($userAuthInput: UserAuthInput!) {
  login(userAuthInput: $userAuthInput) {
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      userAuthInput: // value for 'userAuthInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($userAuthInput: UserAuthInput!) {
  signup(userAuthInput: $userAuthInput) {
    token
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      userAuthInput: // value for 'userAuthInput'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const AddDetailsDocument = gql`
    mutation AddDetails($userDetailsInput: UserDetailsInput!) {
  addDetails(userDetailsInput: $userDetailsInput) {
    success
  }
}
    `;
export type AddDetailsMutationFn = Apollo.MutationFunction<AddDetailsMutation, AddDetailsMutationVariables>;

/**
 * __useAddDetailsMutation__
 *
 * To run a mutation, you first call `useAddDetailsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddDetailsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addDetailsMutation, { data, loading, error }] = useAddDetailsMutation({
 *   variables: {
 *      userDetailsInput: // value for 'userDetailsInput'
 *   },
 * });
 */
export function useAddDetailsMutation(baseOptions?: Apollo.MutationHookOptions<AddDetailsMutation, AddDetailsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddDetailsMutation, AddDetailsMutationVariables>(AddDetailsDocument, options);
      }
export type AddDetailsMutationHookResult = ReturnType<typeof useAddDetailsMutation>;
export type AddDetailsMutationResult = Apollo.MutationResult<AddDetailsMutation>;
export type AddDetailsMutationOptions = Apollo.BaseMutationOptions<AddDetailsMutation, AddDetailsMutationVariables>;
export const GetDetailsDocument = gql`
    query GetDetails {
  getDetails {
    firstName
    lastName
    links {
      platform
      link
    }
  }
}
    `;

/**
 * __useGetDetailsQuery__
 *
 * To run a query within a React component, call `useGetDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDetailsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDetailsQuery(baseOptions?: Apollo.QueryHookOptions<GetDetailsQuery, GetDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDetailsQuery, GetDetailsQueryVariables>(GetDetailsDocument, options);
      }
export function useGetDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDetailsQuery, GetDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDetailsQuery, GetDetailsQueryVariables>(GetDetailsDocument, options);
        }
export function useGetDetailsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetDetailsQuery, GetDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetDetailsQuery, GetDetailsQueryVariables>(GetDetailsDocument, options);
        }
export type GetDetailsQueryHookResult = ReturnType<typeof useGetDetailsQuery>;
export type GetDetailsLazyQueryHookResult = ReturnType<typeof useGetDetailsLazyQuery>;
export type GetDetailsSuspenseQueryHookResult = ReturnType<typeof useGetDetailsSuspenseQuery>;
export type GetDetailsQueryResult = Apollo.QueryResult<GetDetailsQuery, GetDetailsQueryVariables>;
export const MeDocument = gql`
    query Me {
  Me {
    sub
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export function useMeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;