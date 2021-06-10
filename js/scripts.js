//wrapping pokemonList array in an IIFE
const pokemonRepository = (function() {
  const pokemonList = [];
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=200';

  //adding pokemon if it is an object and is not null
  function add(pokemon) {
    if (typeof pokemon === 'object' &&
      'name' in pokemon &&
      'detailsUrl' in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log('The Pokemon is not correct' + '<br>')
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    const pokemonUl = document.querySelector('.pokemon-list');
    const listItem = document.createElement('li');
    const button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');
    listItem.appendChild(button);
    pokemonUl.appendChild(listItem);
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
  }

  function loadList() {
    showLoadingMessage();
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function(json) {
      hideLoadingMessage();
      json.results.forEach(function(item) {
        const pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function(e) {
      hideLoadingMessage();
      console.error(e);
    })
  }

  function loadDetails(pokemonList) {
    showLoadingMessage();
    const url = pokemonList.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function(details) {
      hideLoadingMessage();
      //now we add the details to the pokemon
      pokemonList.imageUrl = details.sprites.front_default;
      pokemonList.height = details.height;
      pokemonList.types = details.types;
    }).catch(function(e) {
      hideLoadingMessage();
      console.error(e);
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function() {
      console.log(item);
    });
  }



  function showLoadingMessage() {
    document.querySelector('body').style.visibility = 'hidden';
    document.querySelector('#loading').style.visibility = 'visible';
  }

  function hideLoadingMessage() {
    document.querySelector('body').style.visibility = 'visible';
    document.querySelector('#loading').style.visibility = 'hidden';
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

pokemonRepository.loadList().then(function() {
  //data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

function darkMode() {
  const checkBox = document.getElementById('check');
  const body = document.body;
  if(checkBox.checked == true) {
    body.classList.add('dark-mode');
  }else {
    body.classList.remove('dark-mode');
  }
}
