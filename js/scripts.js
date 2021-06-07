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

  //adding pokemon if it is an object and is not null
  function add(pokemon) {
    if (typeof pokemon === 'object' && pokemon !== null) {
      pokemonList.push(pokemon);
    } else {
      document.write('The given value is not an object or is null!' + '<br>')
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonUl = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');
    listItem.appendChild(button);
    pokemonUl.appendChild(listItem);

    addEventListener(button, pokemon);
  }

  //add event listener on click to show details
  function addEventListener(button, pokemon) {
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  //logs the number of elements which is 4
  // console.log(pokemonList.length);

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.add({
  name: 'Balbasaur',
  height: 5.7,
  type: ['grass', 'poison']
});
console.log(pokemonRepository.getAll());

console.log(pokemonRepository.getAll().length); //length is 5

//listing all the pokemons and their hight
pokemonRepository.getAll().forEach(function(item) {
  pokemonRepository.addListItem(item);
})
