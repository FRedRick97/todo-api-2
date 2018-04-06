const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/TodoApp');


mongoose.connect(process.env.MONGOLAB_URI, {
    auth: {
        user: 'FRedRick97',
        password: 'admin_123#'
    }
})
    .then(() => console.log('connection successful'))
    .catch((err) => console.error(err));


module.exports = mongoose;
