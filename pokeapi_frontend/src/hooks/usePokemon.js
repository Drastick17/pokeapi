import { useState, useEffect } from "react";

export function usePokemon(name) {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPokemon = async () => {
    const query = await fetch(`http://localhost:3004/api/v1/pokemon/${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        key: "c3d1aee6bb259bba6d5a732741fb47197f73183b",
      },
    });
    const res = await query.json();
    setPokemonData(res);
    setLoading(false)
  };

  useEffect(() => {
    setLoading(true)
    window.scrollTo(0, 0);
    fetchPokemon();
  }, [name]);
  
  return {
    pokemon: pokemonData.results || undefined,
    loading
  };
}
