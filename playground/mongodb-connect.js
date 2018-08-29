const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect', err);
    }

    console.log('Connected to monogodb');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     err = true;
    //     if (err) {
    //         return console.log('Error: while inserting document', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Todos').insertOne({
        name: 'Ajay',
        age: 22,
        location: 'Chandigarh'
    }, (err, result) => {
        if (err) {
            return console.log('Error: while inserting document', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));

    });

    db.close();
});