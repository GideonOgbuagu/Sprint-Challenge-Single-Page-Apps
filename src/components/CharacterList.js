import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import { FormGroup, Input, Button } from "reactstrap";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    Axios.get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        // console.log(res.data.results);
        setCharacters(res.data.results);
      })
      .catch(error => {
        console.log("Something went wrong", error);
      });
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <div>
      <FormGroup>
        <Input
          type='search'
          name='search'
          id='exampleSearch'
          placeholder='search placeholder'
        />
        <Button>Search</Button>
      </FormGroup>
      <section className='character-list'>
        {characters.map(item => (
          <CharacterCard key={item.id} character={item} />
        ))}
      </section>
    </div>
  );
}
