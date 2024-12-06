const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');

app.listen(3000);

app.use(express.static(path.join(__dirname, 'frontend')));

// app.use('/modules', express.static(path.join(__dirname, 'frontend', 'modules')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
  });

app.get('/dictionary', async (req, res) => {
    const searchQuery = req.query.search;
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`;
    const response = await axios.get(apiUrl);
    res.send(response.data);
});

app.get('/books', async (req, res) => {
    const searchQuery = req.query.search;
    const apiUrl = `https://gutendex.com/books?search=${searchQuery}`;
    const response = await axios.get(apiUrl);
    res.send(response.data);
});

app.get('/quotes', async (req, res) => {
    const searchQuery = req.query.search;
    const apiUrl = `https://bolls.life/find/NRSVCE/?search=${searchQuery}`;
    const narrow = '&match_case=false&match_whole=true';
    const quotesUrl = apiUrl.concat(narrow)
    const response = await axios.get(apiUrl);
    res.send(response.data);
});