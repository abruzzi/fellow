import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

function fetchQuery(operation: unknown, variables: unknown) {
  return fetch('https://board-server-graphql-gflhayhl6q-ts.a.run.app/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      // @ts-expect-error
      query: operation.text,
      variables,
    }),
  }).then(response => response.json());
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
