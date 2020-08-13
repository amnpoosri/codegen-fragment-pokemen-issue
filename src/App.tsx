import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useGetPokemonQuery } from "./graphql/generated.d";

function App() {
  const { data, loading, error } = useGetPokemonQuery({
    variables: {
      name: "charizard",
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  if (data) {
    return (
      <div className="App">
        <header className="App-header">
          <p>useGetPokemonQuery</p>
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>APP</p>
      </header>
    </div>
  );
}

export default App;
