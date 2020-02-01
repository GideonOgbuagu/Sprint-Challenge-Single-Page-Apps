import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";

export default function CharacterCard(props) {
  // console.log(props);
  return (
    <Card className='card'>
      <CardImg src={props.character.image} alt='Card image cap' />
      <CardBody>
        <CardTitle>
          <h5>{props.character.name}</h5>
        </CardTitle>
        <CardSubtitle>Gender: {props.character.species}</CardSubtitle>
        <CardSubtitle>Created: {props.character.created}</CardSubtitle>
      </CardBody>
    </Card>
  );
}
