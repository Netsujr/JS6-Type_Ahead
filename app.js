const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
      .then(blob => blob.json())
      .then(data => cities.push(...data)); //spread the array (decustruct each element and push it into cities array)



function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    //does it match?
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  console.log(this.value);
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);


// console.log(data);
