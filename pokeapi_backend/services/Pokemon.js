import pokemonModel from "../models/pokemonModel.js"

export const findPokemons = async (current) => {
const pokemons = await pokemonModel.find({}, null, {skip:current, limit:10}).exec()
return pokemons
}

export const findPokemon = async (name) =>{
  const pokemon = await pokemonModel.findOne({name},null,{}).exec()
  return pokemon
}

export const findByNamePokemons = async (name) =>{
  const pokemons = await pokemonModel.find({name: { $regex: name }}, null, {}).exec()
  return pokemons
}

