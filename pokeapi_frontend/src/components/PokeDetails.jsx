import { Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { usePokemon } from "../hooks/usePokemon";
import colors from "./Colors";
import Loanding from "./Loanding";
import NoFound from "../assets/NoFound.png";

const PokeDetails = () => {
  const { pokemon: name } = useParams();
  const { pokemon, loading } = usePokemon(name);
  if (!pokemon)
    return (
      <div className="text-center">
        <h1>No existe este pokemon (o aun no esta en la base datos)</h1>
        <Link to="/">Regresar</Link>
      </div>
    );
  return (
    <>
      {loading ? (
        <Loanding />
      ) : (
        <div className="w-75 mx-auto d-flex position-relative">
          <Image className="w-50 p-5" src={pokemon?.image || NoFound} />
          <div className="w-50">
            <h1 className="text-capitalize">{pokemon.name}</h1>
            <p className="text-capitalize">
              Tipo:{" "}
              {pokemon.types.map((type) => (
                <span
                  className="text-bold text-light py-2 px-3 rounded"
                  style={{
                    background: colors[type].color,
                    border: `2px solid ${colors[type].bgcolor}`,
                    margin: "0px 6px 0px 0px",
                  }}
                >
                  {type}{" "}
                </span>
              ))}
            </p>
            <p>Altura: {pokemon.height} pies</p>
            <p>Peso: {pokemon.weight} gramos</p>
            <p>
              {pokemon.description} <br />
              Lo puedes encontrar en {pokemon.location} <br /> Habilidades:{" "}
              {pokemon.abilities.join(", ")}
            </p>
            <p>
              Cadena de evolución:
              <ul>
                {pokemon.evolutionChain.map((evolution) => (
                  <li>
                    <Link to={`/${evolution}`}>{`${evolution} ${
                      evolution === pokemon.name ? "(actual)" : ""
                    }`}</Link>
                  </li>
                ))}
              </ul>
            </p>
          </div>
          <Link
            to="/"
            className="position-absolute bg-dark text-light text-decoration-none py-2 px-3 rounded"
          >
            Regresar
          </Link>
        </div>
      )}
    </>
  );
};

export default PokeDetails;
