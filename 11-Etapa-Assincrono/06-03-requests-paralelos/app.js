const getPokemons = async () => {
  const bubasaur = fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');
  const ivysaur = fetch('https://pokeapi.co/api/v2/pokemon/ivysaur');
  const venusaur = fetch('https://pokeapi.co/api/v2/pokemon/venusaur');

  const results = await Promise.all([bubasaur, ivysaur, venusaur]);

  results.forEach(async (response) => console.log(await response.json()))
};

getPokemons();