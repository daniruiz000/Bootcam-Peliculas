import { useState, useEffect } from 'react';

const usePokemonColors = (pokemonData) => {
  const [headerBackground, setHeaderBackground] = useState();
  const [footerBackground, setFooterBackground] = useState();

  useEffect(() => {
    if (pokemonData) {
      const firstPokemonType = pokemonData?.types?.[0]?.type?.name;
      const secondPokemonType = pokemonData?.types?.[1]?.type?.name;

      setHeaderBackground(firstPokemonType || 'default');
      setFooterBackground(secondPokemonType || firstPokemonType || 'default');
    }
  }, [pokemonData]);

  return [headerBackground, footerBackground];
};

export default usePokemonColors;
