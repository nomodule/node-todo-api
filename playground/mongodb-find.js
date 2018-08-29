const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect', err);
    }

    console.log('Connected to monogodb');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b86d85d3db1903d54418b35')
    // }).toArray().then((docs) => {
    //     console.log('Todos:');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find({}).count().then((count) => {
    //     console.log('Todos count:' + count);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Todos').find({name: 'Ajay'}).count().then((count) => {
        console.log('Todos for Ajay: ' + count);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.close();
});