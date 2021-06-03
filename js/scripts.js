//wrapping pokemonList array in an IIFE
let pokemonRepository = (function() {
  //creating the Pokemon database
  let pokemonList = [{
      name: 'Pikachu',
      height: 0.4,
      type: 'electric'
    },
    {
      name: 'Charizard',
      height: 1.7,
      type: ['fire', 'flying']
    },
    {
      name: 'Onix',
      height: 8.8,
      type: ['rock', 'ground']
    },
    {
      name: 'Cubone',
      height: 0.4,
      type: 'ground'
    }
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }
  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.add({
  name: 'Balbasaur',
  height: 5.7,
  type: ['grass', 'poison']
});
console.log(pokemonRepository.getAll());

//listing all the pokemons and their hight
pokemonRepository.getAll().forEach(function(item) {
  //if the pokemon is higher then 5 than write: Wow, this is big
  if (item.height > 5) {
    document.write(item.name + ' is ' + item.height + 'm high!' + ' - Wow! This is big!' + '<br>');
  } else {
    document.write(item.name + ' is ' + item.height + 'm high!' + '<br>');
  }
})
