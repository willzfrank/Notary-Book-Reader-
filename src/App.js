import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import "./App.css";

function App() {
  const client = new ApolloClient({
    uri: "https://flyby-gateway.herokuapp.com/",
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}></ApolloProvider>;
}

export default App;
