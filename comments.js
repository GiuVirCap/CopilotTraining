// Create a web server that listens on port 3000. It will respond to POST requests to the path /comments with a JSON response. The JSON response will be the same as the request body but with an additional property id set to the current date and time in milliseconds. Use the express module to create the server.

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/comments', (req, res) => {
  const comment = req.body;
  comment.id = Date.now();
  res.json(comment);
});

app.listen(3000);

// Path: server.js
// Create a web server that listens on port 3000. It will respond to GET requests to the path /greet with a JSON response. The JSON response will be an object with a property message that is a greeting. The greeting should be random and selected from a list of greetings. Use the express module to create the server.

const express = require('express');
const app = express();

app.get('/greet', (req, res) => {
  const greetings = ['Hello', 'Hi', 'Hey', 'Hola', 'Bonjour'];
  const randomIndex = Math.floor(Math.random() * greetings.length);
  const greeting = greetings[randomIndex];
  res.json({ message: greeting });
});

app.listen(3000);

// Path: server.js
// Create a web server that listens on port 3000. It will respond to GET requests to the path /time with a JSON response. The JSON response will be an object with a property time that is the current date and time in ISO format. Use the express module to create the server.

const express = require('express');
const app = express();

app.get('/time', (req, res) => {
  const time = new Date().toISOString();
  res.json({ time });
});

app.listen(3000);

// Path: server.js
// Create a web server that listens on port 3000. It will respond to GET requests to the path /random with a JSON response. The JSON response will be an object with a property number that is a random number between 1 and 100. Use the express module to create the server.

const express = require('express');
const app = express();

app.get('/random', (req, res) => {
    const number = Math.floor(Math.random() * 100) + 1;
    res.json({ number });
});

