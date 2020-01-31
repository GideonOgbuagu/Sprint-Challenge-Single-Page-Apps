import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <nav>
        <div className="link-container">
          <Link to="/" className="link">Home</Link>
          <Link to="/characters" className="link">Characters</Link>
        </div>
      </nav>
    </header>
  );
}
