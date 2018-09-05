const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// when passed empty object all documents will be removed
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({ text: "Something to do" }).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({ _id: '5b9018e6146a22ce275f0813'}).then((result) => {
    console.log(result);
});


// Todo.findByIdAndRemove('5b9017b1146a22ce275f07e6').then((todo) => {
//     console.log(Todo);
// });