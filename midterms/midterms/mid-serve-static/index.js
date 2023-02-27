//1. Installing Express
//2. Installing libraries/dependencies
//3. Require statements

const express = require('express');
const app = express();

//4. use the middleware required for serving static

app.use(express.static('public'));

//create the route to serve a static index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/' + 'about.html');
});

app.get('/blog', (req, res) => {
  res.sendFile(__dirname + '/' + 'blog.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/' + 'contact.html');
});

app.get('/upload', (req, res) => {
  res.sendFile(__dirname + '/' + 'upload.html');
});

//rerouting
app.get('ab*cd', function (req, res) {
  res.send('Error');
});

//Setting the listener  to ENV PORT info
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});