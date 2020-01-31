import React from "react";
import WelcomePage from "./components/WelcomePage";
import { Route } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <Route exact path='/'>
        <WelcomePage />
      </Route>

      <Route path='/characters'>
        <CharacterList />
      </Route>
    </div>
  );
}
