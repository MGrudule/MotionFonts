const express = require('express');

//App setup

const app = express();
const port = 4000;
const server = app.listen(port, () => console.log(`Listening on port ${port}!`));

//static files

app.use(express.static('public'));
