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

//console.log(pokemonList);

//listing all the pokemons and their hight
pokemonList.forEach(function(item) {
  if (item.height > 5) {
    document.write(item.name + ' is ' + item.height + 'm high!' + ' - Wow! This is big!' + '<br>');
  } else {
    document.write(item.name + ' is ' + item.height + 'm high!' + '<br>');
  }
})
