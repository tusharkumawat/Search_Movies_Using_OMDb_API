var http = require('http');
var fs = require('fs'),
    http = require('http');

http.createServer(function (req, res) {
  var path = '.' + req.url;

  // Default to index.html if no file is specified.
  if (req.url.split('.').length === 1) {
    path += (req.url[req.url.length - 1] !== '/' ? '/' : '') + 'index.html';
  }

  // Check if resource exists and serve 404 page if it doesn't.
  fs.exists(path, function (exists) {
    if ( ! exists) {
      path = './views/404.html';
    }

    fs.readFile(path, function (err, html) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(html + '');  
      res.end();
    });
  });
})
.listen(3000, '127.0.0.1');