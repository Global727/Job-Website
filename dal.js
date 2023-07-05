const MongoClient = require('mongodb').MongoClient;
const url         = "mongodb+srv://admin:admin@cluster0.h6jh94v.mongodb.net/?retryWrites=true&w=majority";
let db            = null;
 
// connect to mongo
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
    console.log("Connected successfully to Monogodb server")
    console.log("Website URL: http://127.0.0.1:3000/#/ ");

    // connect to myproject database
    db = client.db('myproject');
});

// create user account
function create(name, desc, lang){
    return new Promise((resolve, reject) => {    
        const collection = db.collection('users');
        const doc = {name, desc, lang, balance: 0};
        collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err) : resolve(doc);
        });    
    })
}

// find user account
function find(desc){
    return new Promise((resolve, reject) => {    
        const customers = db
            .collection('users')
            .find({desc: desc})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
        });    
    })
}

// find user account
function findOne(desc){
    return new Promise((resolve, reject) => {    
        const customers = db
            .collection('users')
            .findOne({desc: desc})
            .then((doc) => resolve(doc))
            .catch((err) => reject(err));    
    })
}

// update - deposit/withdraw amount
function update(desc, amount){
    return new Promise((resolve, reject) => {    
        const customers = db
            .collection('users')            
            .findOneAndUpdate(
                {desc: desc},
                { $inc: { balance: amount}},
                { returnOriginal: false },
                function (err, documents) {
                    err ? reject(err) : resolve(documents);
                }
            );            


    });    
}

// all users
function all(){
    return new Promise((resolve, reject) => {    
        const customers = db
            .collection('users')
            .find({})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
        });    
    })
}




module.exports = {create, findOne, find, update, all};