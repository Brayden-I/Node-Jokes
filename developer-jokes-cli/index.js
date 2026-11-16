const axios = require('axios');

const BASE_URL = 'https://ozarktechwebdev.com/api/jokes.json';

axios.get(BASE_URL)
  .then((response) => {
    console.log(response.data);
  });