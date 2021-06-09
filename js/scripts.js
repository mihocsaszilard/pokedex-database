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

  function loadDetails(pokemon) {
    showLoadingMessage();
    const url = pokemon.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function(details) {
      hideLoadingMessage();
      //now we add the details to the pokemon
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.types = details.types;
    }).catch(function(e) {
      hideLoadingMessage();
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function() {
      console.log(pokemon);
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

  //Pagination
  var list = new Array();
  var pageList = new Array();
  var currentPage = 1;
  var itemPerPage = 20;
  var numberOfPages = 10;


  function getNumberOfPages() {
    return Math.ceil(list.length / itemPerPage);
  }

  document.getElementById('next').addEventListener('click', function() {
    currentPage += 1;
    loadList();
  });

  document.getElementById('previous').addEventListener('click', function() {
    currentPage -= 1;
    loadList();
  });

  document.getElementById('first').addEventListener('click', function() {
    currentPage = 1;
    loadList();
  });

  document.getElementById('last').addEventListener('click', function() {
    currentPage = numberOfPages;
    loadList();
  });

  function loadTheList() {
    var begin = ((currentPage - 1) * itemPerPage);
    var end = begin + itemPerPage;

    pageList = list.slice(begin, end);
    drawList(); //draws out our data
    check(); //determines the state of the pagination button
  }

  function drawList() {
    document.getElementById('pokemon-list').innerHTML = '';
    for (let r = 0; r < pageList.length; r++) {
      document.getElementById('pokemon-list').innerHTML += pageList[r] + '';
    }
  }

  function check() {
    document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
    document.getElementById("previous").disabled = currentPage == 1 ? true : false;
    document.getElementById("first").disabled = currentPage == 1 ? true : false;
    document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
  }

  function load() {
    loadList();
    loadTheList();
  }

  window.onload = load;
  //pagination end

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

//listing all the pokemons and their hight
// pokemonRepository.getAll().forEach(function(item) {
//   pokemonRepository.addListItem(item);
// })
