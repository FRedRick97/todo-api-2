const mongoose = require('./../db/mongoose');
const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false,
        trim: true
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: 'fortnite',
//     completed: false
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo\n', doc);
// }, (err) => {
//     console.log('Unable to save', err);
// });

module.exports = Todo;
