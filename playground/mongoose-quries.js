const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// const id = '5b8acffd5994901412fc2a011';

// if (!ObjectID.isValid(id)) {
//     console.log('ID is NOT valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((err) => console.log(err));

const id = '5b87e01b1c165d240795f3c7';


// User.find({
//     _id: id
// }).then((users) => {
//     console.log('User', users);
// });

// User.findOne({
//     _id: id
// }).then((user) => {
//     console.log('User', user);
// });

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (err) => {
    console.log(err);
})