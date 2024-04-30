// Create a web server
// Load the express module
const express = require('express');
// Create an express app
const app = express();
// Load the fs module
const fs = require('fs');
// Load the body-parser module
const bodyParser = require('body-parser');
// Load the path module
const path = require('path');
// Load the comments.json file
const commentsPath = path.join(__dirname, 'comments.json');

// Use the body-parser middleware
app.use(bodyParser.json());

// Set the port
const port = 3000;

// Load the comments from the comments.json file
const loadComments = () => {
  const data = fs.readFileSync(commentsPath);
  return JSON.parse(data);
}

// Save the comments to the comments.json file
const saveComments = (comments) => {
  const data = JSON.stringify(comments, null, 2);
  fs.writeFileSync(commentsPath, data);
}

// Create a route for getting all comments
app.get('/comments', (req, res) => {
  const comments = loadComments();
  res.json(comments);
});

// Create a route for adding a comment
app.post('/comments', (req, res) => {
  const comments = loadComments();
  const comment = req.body;
  comment.id = Date.now();
  comments.push(comment);
  saveComments(comments);
  res.json(comment);
});

// Create a route for getting a comment by id
app.get('/comments/:id', (req, res) => {
  const comments = loadComments();
  const id = parseInt(req.params.id);
  const comment = comments.find(comment => comment.id === id);
  res.json(comment);
});

// Create a route for updating a comment by id
app.put('/comments/:id', (req, res) => {
  const comments = loadComments();
  const id = parseInt(req.params.id);
  const comment = comments.find(comment => comment.id === id);
  Object.assign(comment, req.body);
  saveComments(comments);
  res.json(comment);
});

// Create a route for deleting a comment by id
app.delete('/comments/:id', (req, res) => {
  const comments = loadComments();
  const id = parseInt(req.params.id);
  const index = comments.findIndex(comment => comment.id === id);
  comments.splice(index, 1);
  saveComments(comments);
  res.json({ id });
});

// Start the server
app.listen(port, () 
