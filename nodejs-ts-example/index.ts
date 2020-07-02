import express = require('express');
import * as path from 'path';
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8000, () => {
    console.log('Server running at http://localhost:8000/');
});
