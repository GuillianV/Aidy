const express = require('express');
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8888;
const path = require('path');
app.set('view engine', 'ejs');

app.use('/static', express.static(__dirname + '/static'));

app.get('/', (req, res) => {
    res.render(__dirname + "/views" + '/index', {name: process.env.PROJECT_NAME});
});

app.listen(port, () => {
    console.log(`Server is up at port ${port}`);
});

