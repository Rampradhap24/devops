const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Jenkins + Docker on port 5500 🚀');
});

app.listen(5500, () => console.log('Server running on port 5500'));
