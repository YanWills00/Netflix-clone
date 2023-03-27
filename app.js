const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', 'ejs');
app.listen(3001, () => {
    console.log("listening on port 3001");
});

app.get('/', (req, res) => {
    res.render('index');
});