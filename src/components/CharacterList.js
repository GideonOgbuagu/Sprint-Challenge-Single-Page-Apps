import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import { FormGroup, Input, Container } from "reactstrap";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [searchTerm, setSearchTerm] = useState("");
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

  useEffect(() => {
    Axios.get(`https://rickandmortyapi.com/api/character/`).then(response => {
      console.log(response);
      const result = response.data.results.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      // console.log("harry potter characters", response);
      setCharacters(result);
    });
  }, [searchTerm]);
  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <FormGroup>
        <Input
          type='search'
          name='search'
          id='exampleSearch'
          placeholder='Search Character...'
          onChange={handleInputChange}
        />
      </FormGroup>
      <Container className='character-list'>
        {characters.map(item => (
          <CharacterCard key={item.id} character={item} />
        ))}
      </Container>
    </div>
  );
}
