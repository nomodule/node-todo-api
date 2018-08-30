const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect', err);
    }

    console.log('Connected to monogodb');

    // findOneAndUpdate

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b86cfe9611eaa0e8c8419a1')
    // }, {
    //     $set: {
    //         text: 'Watch mongodb update tutorial'
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b879466e99e4971276efdf4')
    }, {
        $set: {
            name: 'Ajay'
        },
        $inc: {
            age: -3
        }
    }, {
        returnOriginal: true
    }).then((result) => {
        console.log(result);
    })

    db.close();
});