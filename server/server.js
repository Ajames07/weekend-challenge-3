const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(express.static( 'sever/public' ));
const PORT = process.env.PORT || 5000;

//mongoose
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

//schema
const Schema = mongoose.Schema;
const TaskSchema = new Schema ({
    task: {type: String}
});//end schema

const task = mongoose.model('tasks', TaskSchema);


app.post('/tasks', ( req , res ) => {
    console.log('POST to /tasks req.body =', req.body);
    const addTasks = new TaskSchema(req.body);
    addTasks.save().then(() => {
        console.log('new task added to', addTasks);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('ERROR with app.posts',error);
        res.sendStatus(500);
    });
    
})

app.get('/tasks', ( req , res ) => {
    task.find({}).then((weekendchallenge) => {
        res.send(weekendchallenge);
    }).catch((error) => {
        console.log('ERROR with GET', error);
        res.sendStatus(500)
    });
})

app.use(express.static('server/public'));
app.listen( PORT, () => {
    console.log('listening on PORT', PORT);
})