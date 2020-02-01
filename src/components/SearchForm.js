import React, { useState } from "react";
import { FormGroup, Input } from "reactstrap";

export default function SearchForm(props) {
  return (
    <section className='search-form'>
      <FormGroup>
        <Input
          type='search'
          name='search'
          id='exampleSearch'
          placeholder='Search Character...'
          onChange={props.searchInputChange}
        />
      </FormGroup>
    </section>
  );
}
