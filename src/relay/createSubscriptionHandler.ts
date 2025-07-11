import { createClient } from 'graphql-ws';
import { Observable } from 'relay-runtime';

export const createSubscriptionHandler = (url: string) => {
  const client = createClient({
    url,
    connectionParams: () => {
      const token = localStorage.getItem('token');
      return {
        authorization: token ? `Bearer ${token}` : '',
      };
    },
  });

  return (operation: any, variables: any) => {
    return Observable.create((sink) => {
      return client.subscribe(
        {
          operationName: operation.name,
          query: operation.text!, // must be string
          variables,
        },
        {
          next: sink.next.bind(sink),
          error: sink.error.bind(sink),
          complete: sink.complete.bind(sink),
        }
      );
    });
  };
};
