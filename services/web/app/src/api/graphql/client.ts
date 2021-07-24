import {
  Exchange,
  makeOperation,
  Operation,
  cacheExchange,
  dedupExchange,
  fetchExchange,
  Client,
  subscriptionExchange,
} from "@urql/core";
import { createClient } from "@urql/vue";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { pipe, fromPromise, fromValue, mergeMap, map } from "wonka";

const AuthorizationHeader = "Authorization";
const AuthBearer = "Bearer";

const getBearerToken = (token: string): string => `${AuthBearer} ${token}`;

export type AnonymousClientOptions = {
  readonly uri: string;
  readonly headers?: Record<string, string>;
  readonly version?: string;
};

export type AuthClientOptions = AnonymousClientOptions & {
  readonly getIdToken: () => Promise<string | null>;
};

const fetchOptionsExchange =
  (fn: (options: unknown) => Promise<unknown>): Exchange =>
  ({ forward }) =>
  (ops$) => {
    return pipe(
      ops$,
      mergeMap((operation: Operation) => {
        const result = fn(operation.context.fetchOptions);
        return pipe(
          typeof result.then === "function"
            ? (fromPromise(result) as any)
            : fromValue(result),
          map((fetchOptions: RequestInit | (() => RequestInit)) => {
            return makeOperation(operation.kind, operation, {
              ...operation.context,
              fetchOptions,
            });
          })
        );
      }),
      forward
    );
  };

export const createAuthClient = ({
  uri,
  getIdToken,
  headers: defaultHeaders,
  version,
}: AuthClientOptions): Client => {
  const getHeaders = () =>
    getIdToken().then((token) => ({
      headers: {
        ...defaultHeaders,
        ...(token
          ? {
              [AuthorizationHeader]: getBearerToken(token),
            }
          : {}),
        "X-Version": version,
      },
    }));
  const subscriptionClient = new SubscriptionClient(uri, {
    reconnect: true,
    connectionParams: getHeaders,
    lazy: true,
  });

  return createClient({
    url: uri,
    exchanges: [
      dedupExchange,
      cacheExchange,
      fetchOptionsExchange(async (fetchOptions: any) =>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        getHeaders().then((opts) => ({
          ...fetchOptions,
          ...opts,
        }))
      ),
      fetchExchange,
      subscriptionExchange({
        forwardSubscription(operation) {
          return subscriptionClient.request(operation);
        },
      }),
    ],
  });
};
