const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const controller = require('./controllers');
const pagesRoute = require('./routes/pages');
const apiRoute = require('./routes/api');
const { DB, PORT } = require('./utils');

const app = express();

const connect = async () => {
    let { connections: [mongo] } = await mongoose.connect(`mongodb+srv://${DB.USERNAME}:${DB.PASSWORD}@${DB.URI}/${DB.DATABASE}`, { 
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    console.log(`Mongo connected to database: ${mongo.name}`);
}

let public = path.join(__dirname, 'public');
let views = path.join(__dirname, 'views');

app.set('view engine', 'ejs');
app.set('views', views);
app.use(express.static(public));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', pagesRoute);
app.use('/api', apiRoute);
app.use('/', controller.error);

app.listen(PORT, () => {
    connect();

    console.log(`Server running on port: ${PORT}`)
});