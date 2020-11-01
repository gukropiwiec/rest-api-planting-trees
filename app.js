const express = require('express');
const app = express();
const mongoose = require('mongoose');
const treesRoute = require('./routes/trees');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv');
const rateLimit = require("express-rate-limit");

app.use(rateLimit({
    windowMs: 15 * 1000, // 15 seconds
    max: 10
}));

app.use(morgan('common'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Starting server at ${port}`);
});

app.use(cors());

const options = { 
    useNewUrlParser: true,
    useUnifiedTopology: true
};

let time = Date.now();
mongoose.connect(process.env.DB_URL, options, () => {
    console.warn('connected to PlantingTreesDB --- Tempo: ', Date.now() - time, 'ms');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/trees', treesRoute);

app.get('/', (req, res) => {
    res.send(`API WORKING; endpoint /trees`);
});

