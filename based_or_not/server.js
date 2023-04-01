const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('testing');
});

// get posts from the database
app.get('/getPosts', (req, res) => {
  res.send('database data that users will vote on');
});
app.listen(port, () => {
  console.log('Listening on port 3000');
});
