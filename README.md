# Developer Jokes CLI

A small Node.js command-line tool that fetches a list of developer jokes from an online API and prints one at random.

## Requirements

- Node.js and npm
- An internet connection

## Installation

From the `developer-jokes-cli` folder:

```bash
npm install
```

## Usage

```bash
npm start
```

This runs `node index.js`. Each run prints one random joke, for example:

```
Here is a developer joke for today:
Q: <question>
A: <answer>
```

If the jokes can't be fetched, the tool prints:

```
Could not find a developer joke for today. Please try again later.
```

## How it works

`index.js` requests `https://ozarktechwebdev.com/api/jokes.json` with [axios](https://www.npmjs.com/package/axios). The response's `jokes` array is checked, a joke is picked at random, and its question and answer are printed. If the array is empty, the tool prints "No jokes found." instead.

## Project structure

```
developer-jokes-cli/
├── index.js          # Fetches the jokes and prints a random one
├── package.json      # Project metadata, npm start script, axios dependency
└── package-lock.json # Locked dependency versions
```

## Dependencies

- [axios](https://www.npmjs.com/package/axios) for HTTP requests

## AI disclosure

Parts of this project were developed with help from an AI assistant in the ProxyAI plugin for JetBrains Rider (CodeGPT). The assistant answered questions about committing npm `package.json` files, suggested an approach for fetching a random joke from the returned array, reviewed `index.js` for potential bugs, and drafted an initial README. The author reviewed these suggestions and did not adopt the assistant's bug list or "corrected" code. The initial README draft did not match the actual project, so the author rewrote it against the code.
