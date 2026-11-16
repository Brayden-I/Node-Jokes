const axios = require('axios');

const BASE_URL = 'https://ozarktechwebdev.com/api/jokes.json';

axios.get(BASE_URL)
  .then((response) => {
      const data = response.data;
      console.log(data);
      
      const jokes = data.jokes;
      
      const randomIndex = Math.floor(Math.random() * jokes.length);
      const randomJoke = jokes[randomIndex];
      
      console.log("Here is a developer joke for today:");
      
      console.log(`Q: ${randomJoke.question}`);
      console.log(`A: ${randomJoke.answer}`);
  });