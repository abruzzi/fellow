import { Environment, Network, RecordSource, Store } from "relay-runtime";

function fetchQuery(operation: unknown, variables: unknown) {
  return fetch(`${import.meta.env.VITE_BOARDS_BASE_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      // @ts-expect-error it's expected
      query: operation.text,
      variables,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      if (json.errors) {
        // Check if any of the errors are authentication errors
        const authError = json.errors.find(
          (error) =>
            error.message.toLowerCase().includes("Not authenticated") ||
            error.message.toLowerCase().includes("unauthenticated"),
        );

        if (authError) {
          localStorage.removeItem("token");
          window.location.href = "/login";
        } else {
          throw new Error(json.errors[0].message);
        }
      }
      return json;
    });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
