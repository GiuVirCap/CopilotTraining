// Create a web server

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var path = url.parse(request.url).pathname;
  switch(path){
    case '/':
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write('Hello World');
      response.end();
      break;
    case '/comments':
      if(request.method == 'POST'){
        var body = '';
        request.on('data', function(data){
          body += data;
        });
        request.on('end', function(){
          var post = querystring.parse(body);
          console.log(post);
          response.writeHead(200, {'Content-Type': 'text/html'});
          response.write('You sent the comment: ' + post.comment);
          response.end();
        });
      }
      break;
    default:
      response.writeHead(404);
      response.write('Route not defined');
      response.end();
  }
});

// Listen on port 8000, IP defaults to