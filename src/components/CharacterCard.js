import React from "react";
import {
  Card,
  Container,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

export default function CharacterCard(props) {
  console.log(props);
  return (
    <Container>
      <Card>
        <CardImg src={props.character.image} alt='Card image cap' />
        <CardBody>
          <CardTitle>Name: {props.character.name}</CardTitle>
          <CardSubtitle>Gender:{props.character.species}</CardSubtitle>
          <CardSubtitle>Created:{props.character.created}</CardSubtitle>
        </CardBody>
      </Card>
    </Container>
  );
}
