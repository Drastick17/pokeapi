import { useState, useEffect } from "react";

export function useSearch(name) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPokemonsByName = async () => {
    const query = await fetch(`http://localhost:3004/api/v1/pokemon/search/${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        key: "c3d1aee6bb259bba6d5a732741fb47197f73183b",
      },
    });
    const res = await query.json();
    setList(res);
    setLoading(false)
  };

  useEffect(() => {
    setLoading(true)
    window.scrollTo(0, 0);
    fetchPokemonsByName();
  }, [name]);
  
  return {
    pokemons: list.results || [],
    loading
  };
}
