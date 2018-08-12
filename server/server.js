const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/weekendchallenge';

mongoose.connect(mongoURI, {useNewUrlParser: true});
//successfully connect.
mongoose.connection.on('open', () => {
    console.log('Success! connected to Mongo');
});//end mongoose open
//Login Failure, error.
mongoose.connection.on('error', (error) => {
    console.log('ERROR CONNECTING TO MONGO', error);
});//end mongoose error

const Schema = mongoose.Schema;
const TaskSchema = new Schema ({
    task: {type: String},
    date: {type: String},
    due: {type: String},
    notes: {type: String}
});//end schema

const task = mongoose.model('tasks', TaskSchema);