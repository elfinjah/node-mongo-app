const monggoClient = require('mongodb').MongoClient;

monggoClient.connect('mongodb://localhost:27017/VehicleApp', {'useNewUrlParser': true}, (err, client) => {
    if(err) {
        return console.log('Can not connect to MongoDB server with error \n', err);
    }
    console.log('Connect to MongoDB server...');
    const db = client.db('VehicleApp');

    db.collection('Vechiles')
        .insertOne({
            name: "D90",
            type: "jeep",
            price: 500,
            available: false
        }, (error, result) => {
            if(error){
                return console.log('Can not insert vehicle with error \n', error);
            }

        console.log(JSON.stringify(result.ops, undefined, 2));
        });

        db.collection('Vechiles')
        .insertOne({
            name: "Rush",
            type: "suv",
            price: 140,
            available: true
        }, (error, result) => {
            if(error){
                return console.log('Can not insert vehicle with error \n', error);
            }

        console.log(JSON.stringify(result.ops, undefined, 2));
        });

    db.collection('Users')
        .insertOne({
            name: "Jahred",
            email: "jahred@nodejs.com",
            password: "password.1"
        }, (error, result) => {
            if(error){
                return console.log('Can not insert user with error \n', error);
            }

        console.log(JSON.stringify(result.ops, undefined, 2));
        });

    client.close();
});
