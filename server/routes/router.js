const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//schema
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    task: {
        type: String
    }
}); //end schema

const task = mongoose.model('tasks', TaskSchema);

router.post('/', (req, res) => {
    console.log('POST to /tasks req.body =', req.body);
    let datBody = (req.body);
    console.log(datBody);
    const addTasks = new task(datBody);
    addTasks.save().then(() => {
        console.log('new task added to', addTasks);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('ERROR with app.posts', error);
        res.sendStatus(500);
    });

});


router.get('/', (req, res) => {
    task.find({}).then((weekendchallenge) => {
        res.send(weekendchallenge);
    }).catch((error) => {
        console.log('ERROR with GET', error);
        res.sendStatus(500)
    });
});

//delete task
router.delete('/delete/:id', function (req, res) {
    console.log('delete task witd id: ', req.params.id);
    task.findByIdAndRemove(req.params.id)
        .then((response) => {
            res.sendStatus(200);
        }).catch((error) => {
            res.sendStatus(500);
        });
})

module.exports = router;