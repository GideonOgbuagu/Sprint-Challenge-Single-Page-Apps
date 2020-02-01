import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

export default function Header() {
  return (
    <div>
      <header className='ui centered'>
        <h1 className='ui center'>Rick &amp; Morty Fan Page</h1>
      </header>
      <Container>
        <div className='link-container'>
          <Link to='/' className='link'>
            Home
          </Link>
          <Link to='/characters' className='link'>
            Characters
          </Link>
        </div>
      </Container>
    </div>
  );
}
