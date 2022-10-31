import { model, Schema } from 'mongoose'

const pokemonSchema = new Schema({
  name: String,
  image: String,
  description: String,
  height: String,
  weight:String,
  location: String,
  abilities:Array,
  types: Array,
  evolutionChain: Array
})

pokemonSchema.set('toJSON',{
  transform: (document, returnedObject) =>{
    returnedObject.id = returnedObject._id
    delete returnedObject._id
  }
})

const Pokemon = model('pokemon', pokemonSchema)
export default Pokemon
