const express = require('express');
const todos = require('./todo-data');
const app = express();
const port = 8282;

app.get('/todos', (req, res) => {
    res.send(todos);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});