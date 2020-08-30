import React from "react";
import "./App.css";
import { useGetCityByNameQuery } from "./graphql/generated.d";

function App() {
  const { data, loading, error } = useGetCityByNameQuery({
    variables: {
      name: "Helsinki",
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
          <p>useGetCityByNameQuery</p>
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
