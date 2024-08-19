import { fetcher } from '../fetcher';

export function graphQLApi<Data>(path: string, init?: RequestInit | undefined) {
  return fetcher<Data>(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}${path}`, init);
}
