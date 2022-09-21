const axios = require('axios');

// Import stylesheets
import './style.css';

// Shape returned by IMDB
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

async function fetchData(htmlElement, ev) {
  // endpoint
  const IMDB_API_SEARCH = 'https://jsonplaceholder.typicode.com/albums/';

  const response = await axios.get();

  console.log(response);
  // createAndRenderTable(response.data.results);
}

function createAndRenderTable(movies) {
  const tableContainer = document.getElementById('create-table-here');

  // CREATE YOUR TABLE
  // tableContainer.innerHTML = table;
}

function initialize() {
  const buttonElement = document.getElementById('fetch-data-button');
  buttonElement.addEventListener('click', fetchData);
}

// Write TypeScript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `
<button id="fetch-data-button">Fetch Data</button>
<div id="create-table-here">
create your table here
</div>
`;

initialize();
