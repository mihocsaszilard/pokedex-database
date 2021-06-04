//wrapping pokemonList array in an IIFE
const pokemonRepository = (function() {
  //creating the Pokemon database
  const pokemonList = [{
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

  function addv(pokemon){
    if(typeof pokemon === 'object' && pokemon !== null){
      pokemonList.push(pokemon);
    }else{
      document.write('The given value is not an object or is null!' + '<br>')
    }
  }

  function getAll() {
    return pokemonList;
  }

  const keysNumber = Object.keys(pokemonList).length; //logs the number of elements which is 4
  console.log(keysNumber);

  return {
    add: add,
    addv:addv,
    getAll: getAll
  };
})();

pokemonRepository.addv();

pokemonRepository.addv({
  name: 'Balbasaur',
  height: 5.7,
  type: ['grass', 'poison']
});
console.log(pokemonRepository.getAll());

console.log(Object.keys(pokemonRepository.getAll()).length);  //length is 5

//listing all the pokemons and their hight
pokemonRepository.getAll().forEach(function(item) {
  //if the pokemon is higher then 5 than write: Wow, this is big
  if (item.height > 5) {
    document.write(item.name + ' is ' + item.height + 'm high!' + ' - Wow! This is big!' + '<br>');
  } else {
    document.write(item.name + ' is ' + item.height + 'm high!' + '<br>');
  }
})
