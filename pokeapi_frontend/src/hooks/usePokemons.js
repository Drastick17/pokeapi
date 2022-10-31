import { useState, useEffect } from "react";

export function usePokemons() {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [url, setUrl] = useState("http://localhost:3004/api/v1/pokemon");
  const fetchPokemons = async () => {
    const query = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        key: "c3d1aee6bb259bba6d5a732741fb47197f73183b",
      },
    });
    const res = await query.json();
    setPokemonsData(res);
  };

  const changeUrl = (url) => setUrl(url);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchPokemons();
  }, [url]);
  
  return {
    changeUrl,
    pokemons: pokemonsData.results,
    previus: pokemonsData.previus,
    next: pokemonsData.next,
  };
}
