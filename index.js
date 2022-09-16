const axios = require('axios');

// Import stylesheets
import './style.css';

// Tasks
// I movie interface returned by IMDB
// interface IMovie {
//   title: string;
//   description: string;
//   image: string;
//   id: string;
//   resultType: string;
// }

// interface IMDB_Response {
//   errorMessage: string;
//   expression: string;
//   results: IMovie[];
// }

async function fetchData(element, ev) {
  const input = document.getElementById('data-input');
  const inputValue = input.value;
  const searchKeyword = 'batman';
  // endpoint
  const IMDB_API_SEARCH = 'https://imdb-api.com/en/API/SearchMovie/k_d3adyy0g/';

  const response = await axios.get(
    `${IMDB_API_SEARCH}${inputValue || searchKeyword}`
  );

  console.log(response);
  createAndRenderTable(response.data.results);
}

function createAndRenderTable(movies) {
  const tableContainer = document.getElementById('create-table-here');
  const movieRows = movies.map((movie) => {
    return `
    <tr>
      <td><img src="${movie.image}" class="movie-image" width="50px" height="50px"></td>
      <td>${movie.title}</td>
      <td>${movie.description}</td>
   </tr>`;
  });
  const table = `
  <table class="movie-table">
    <tr>
      <td>Title</td>
      <td>description</td>
    </tr>
    ${movieRows.join('')}
  </table>
  `;
  tableContainer.innerHTML = table;
}

function initialize() {
  const buttonElement = document.getElementById('fetch-data-button');
  buttonElement.addEventListener('click', fetchData);
}

// Write TypeScript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `
<button id="fetch-data-button">Fetch Data</button><input id="data-input" placeholder="movie title goes here"></input>
<div id="create-table-here">
create your table here
</div>
`;

setTimeout(initialize, 10);
