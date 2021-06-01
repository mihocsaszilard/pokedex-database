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

console.log(pokemonList);

//listing all the pokemons and their hight
for (let i = 0; i < pokemonList.length; i++) {
  //this conditional decides if the height is above 5 and if it is than highlights the pokemon
  if (pokemonList[i].height > 5) {
    document.write(pokemonList[i].name + ' is ' + pokemonList[i].height + 'm high' + ' - Wow, that\'s big!' + '<br>');
  }
  // else if(pokemonList[i].height < 1){
  //   document.write(pokemonList[i].name + ' is ' + pokemonList[i].height + 'm high' + ' - That\'s little!' + '<br>');
  // }else{
  //   document.write(pokemonList[i].name + ' is ' + pokemonList[i].height + 'm high' + ' - Average one.' + '<br>');
  // }
  else {
    document.write(pokemonList[i].name + ' is ' + pokemonList[i].height + 'm high' + '<br>');
  }
}
