const axios = require('axios');

const BASE_URL = 'https://ozarktechwebdev.com/api/jokes.json';

axios.get(BASE_URL)
    .then((response) => {
          const data = response.data;

          const jokes = data.jokes;

          if (!jokes || jokes.length === 0) {
                console.error("No jokes found.");
                return;
          }

          const randomIndex = Math.floor(Math.random() * jokes.length);
          const randomJoke = jokes[randomIndex];

          console.log("Here is a developer joke for today:");

          console.log(`Q: ${randomJoke.question}`);
          console.log(`A: ${randomJoke.answer}`);
    })
    .catch((error) => {
          console.error("Could not find a developer joke for today:", error);
    });