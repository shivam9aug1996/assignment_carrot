import { ApolloProvider } from "@apollo/client";
import React from "react";
import { View } from "react-native";
import { client } from "./appolo";
import { FilmList } from "./FilmList";

function App() {
  return (
    <ApolloProvider client={client}>
      <FilmList />
    </ApolloProvider>
  );
}

export default App;
