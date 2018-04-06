const { ObjectID } = require('mongodb');
const bodyParser = require('body-parser');
const express = require('express');

var { mongoose } = require('./db/mongoose');
const Todo = require('./../models/todo');
const User = require('./../models/user');

var app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    const express = require('express');
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo)
            return res.status(404).send();
        res.send({ todo });
    }).catch((err) => {
        res.status(404).send(err);
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

module.exports = { app };
