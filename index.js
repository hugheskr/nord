const express = require('express');
const app = express();

app.get('/tags', (req, res) => 
	res.send('Got a GET request for tags'));

app.post('/tags', (req, res) =>
  res.send('Got a POST request for tags'));

app.get('/stars', (req, res) => 
	res.send('Got a GET request for stars'));

app.post('/stars', (req, res) =>
  res.send('Got a POST request for stars'));

app.get('/description', (req, res) => 
	res.send('Got a GET request for description'));

app.post('/description', (req, res) =>
  res.send('Got a POST request for description'));

// app.put('/user', (req, res) =>
//   res.send('Got a PUT request at /user'));

// app.delete('/user', (req, res) =>
//   res.send('Got a DELETE request at /user'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));