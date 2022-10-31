import React from "react";
import { Row, Button, Container } from "react-bootstrap";
import { usePokemons } from "../hooks/usePokemons";
import Loanding from "./Loanding";
import PokeCard from "./PokeCard";

const PokeCardsContainer = () => {
  const { pokemons, changeUrl, previus, next } = usePokemons();

  if (!pokemons) {
    return <Loanding />;
  }
  return (
    <Container fluid>
      <section
        style={{ minHeight: "30vh", placeContent: "center", display: "grid" }}
      >
        <h1>PokeAPI Chagenge</h1>
        <p>Esta es mi pokeapi creada con react y nodejs</p>
      </section>
      <Row gap={3}>
        {pokemons.map((pokemon, i) => (
          <PokeCard key={pokemon.id} id={i + 1} pokemon={pokemon} />
        ))}
      </Row>
      <div className="d-flex flex-row justify-content-between w-75 pb-5 px-3 mx-auto">
        <Button variant="dark" text="light" onClick={() => changeUrl(previus)}>
          Anterior
        </Button>
        <Button variant="dark" text="light" onClick={() => changeUrl(next)}>
          Siguiente
        </Button>
      </div>
    </Container>
  );
};

export default PokeCardsContainer;
