const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/VehicleApp', {'useNewUrlParser': true}, (err, client) => {
    if(err) {
        return console.log('Can not connect to MongoDB server with error \n', err);
    }
    console.log('Connect to MongoDB server...');

    const db = client.db('VehicleApp');

    db.collection('Vechiles').find({
        //available: false
        name: /r/i // like operator with non key sensitif...
    }).toArray().then((docs) => {
        console.log("Docs: ",JSON.stringify(docs, undefined, 2));
    }, (error) => {
        console.log('Unable to fetch data\n', error);
    });

    // client.close();
});
