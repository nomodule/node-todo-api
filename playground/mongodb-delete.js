const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect', err);
    }

    console.log('Connected to monogodb');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2))
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Users').deleteMany({name: 'Ajay'}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Users').deleteOne({_id: new ObjectID('5b879476e99e4971276efdfa')}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({age: 27}).then((result) => {
        console.log(result);
    });

    db.close();
});