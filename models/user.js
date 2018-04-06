const mongoose = require('./../db/mongoose');

const User = mongoose.model('User', {
    email: {
        type: String,
        trim: true,
        required: true,
        minlength: 1
    }
});

// var newUser = new User({
//     email: 'abc@mail.com'
// });

// newUser.save().then((doc) => {
//     console.log('Saved user\n', doc);
// }, (err) => {
//     console.log('Unable to save', err);
// });

module.exports = User;
