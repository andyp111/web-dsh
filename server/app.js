const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const client = require('./database/postgresql.js');

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(bodyParser.json());



const port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));



app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})