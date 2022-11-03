import Secrets from '../../secrets/api';

export type Query = {
  query: any;
  variables: { [k:string]: any };
  operationName?: string;
};

export const graphql = (query: Query) => {
  return fetch(Secrets.GRAPHQL_URL, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        ...Secrets.REQUEST_HEADERS
      },
      body: JSON.stringify(query),
    });
}
