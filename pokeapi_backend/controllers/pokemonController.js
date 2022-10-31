import { findPokemons, findPokemon, findByNamePokemons } from "../services/Pokemon.js";

const getPokemons = async (req, res) => {
  const { current = 0 } = req.query;
  try {
    const pokemons = await findPokemons(current);
    const url = new URL(
      `${req.protocol}://${req.get("host")}${req.originalUrl.split("?")[0]}`
    );

    res.status(200).json({
      status: "OK",
      next: `${url}?current=${Number(current) + 10}`,
      previus:`${url}?current=${current <= 0 ? 0 : Number(current) - 10}`,
      results: pokemons,
    });
  } catch (error) {
    console.error(error);
  }
};

const getOnePokemon = async (req, res) => {
  const { pokemonName } = req.params;
  try {
    const pokemon = await findPokemon(pokemonName);
    res.status(200).json({
      status: "OK",
      results: pokemon,
    });
  } catch (error) {
    console.error(error);
  }
};

const getByNamePokemons = async (req, res) =>{
  const { name } = req.params
  try {
    const pokemons = await findByNamePokemons(name);
    res.status(200).json({
      status: "OK",
      results: pokemons,
    });
  } catch (error) {
    console.error(error);
  }
}

export { getPokemons, getOnePokemon, getByNamePokemons };
