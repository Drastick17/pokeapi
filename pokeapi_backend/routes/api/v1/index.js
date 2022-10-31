import express from "express";
import {
  getPokemons,
  getOnePokemon,
  getByNamePokemons
} from "../../../controllers/pokemonController.js";
const router = express.Router();

router.get("/", getPokemons);
router.get("/:pokemonName", getOnePokemon);
router.get("/search/:name", getByNamePokemons);

export default router;
