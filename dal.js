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
function create(name, desc, degree, title, experience, manage, location, city, contract, respo, rqual, qual, link, lang1, lang2, lang3, lang4, lang5, lang6, lang7, lang8, lang9, lang10){
    return new Promise((resolve, reject) => {    
        const collection = db.collection('users');
        const doc = {name: name, desc: desc, degree: degree, title: title, experience: experience, manage: manage, location: location, city: city, contract: contract, respo: respo, rqual: rqual, qual: qual, link: link, lang1: lang1, lang2: lang2, lang3: lang3, lang4: lang4, lang5: lang5, lang6: lang6, lang7: lang7, lang8: lang8, lang9: lang9, lang10: lang10};
        collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err) : resolve(doc);
            console.log("dal success")
        });    
    })
}


            
// find user account
function find(degree, title, experience, experiencemin, manage, location, lang1, lang2, lang3, lang4, lang5, lang6, lang7, lang8, lang9, lang10){
    return new Promise((resolve, reject) => {    
        const customers = db
            .collection('users')
            .find({
                   
                   degree: degree,
                   location: location,
                   //might need to be cconverted to string
                   experience: {$lte: +experience},
                   lang1: {$in: [lang1, lang2, lang3, lang4, lang5, lang6, lang7, lang8, lang9, lang10]},
                   lang2: {$in: [lang1, lang2, lang3, lang4, lang5, lang6, lang7, lang8, lang9, lang10]},
                   lang3: {$in: [lang1, lang2, lang3, lang4, lang5, lang6, lang7, lang8, lang9, lang10]},
                   lang4: {$in: [lang1, lang2, lang3, lang4, lang5, lang6, lang7, lang8, lang9, lang10]},
                   lang5: {$in: [lang1, lang2, lang3, lang4, lang5, lang6, lang7, lang8, lang9, lang10]},
                   lang6: {$in: [lang1, lang2, lang3, lang4, lang5, lang6, lang7, lang8, lang9, lang10]},
                   lang7: {$in: [lang1, lang2, lang3, lang4, lang5, lang6, lang7, lang8, lang9, lang10]},
                   lang8: {$in: [lang1, lang2, lang3, lang4, lang5, lang6, lang7, lang8, lang9, lang10]},
                   lang9: {$in: [lang1, lang2, lang3, lang4, lang5, lang6, lang7, lang8, lang9, lang10]},
                   lang10: {$in: [lang1, lang2, lang3, lang4, lang5, lang6, lang7, lang8, lang9, lang10]} 
            })
            //.find({tags: {$in: [degree: degree, manage: manage, lang1: lang1, lang2: lang2, lang3: lang3, lang4: lang4, lang5: lang5, lang6: lang6, lang7: lang7, lang8: 
            //lang8, lang9: lang9, lang10: lang10]}})
            
    
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
                console.log('dal = manage =',manage, 'experience=',experience,toString.experiencemin)
        });    
    })
}

    
            /*    .toArray(function(err, result) {
                if (err) throw err;
                console.log('dal', result);
        });    
    })
} */

// find user account
function findOne(lang1){
    return new Promise((resolve, reject) => {    
        const customers = db
            .collection('users')
            .findOne({lang1: lang1})
            .then((doc) => resolve(doc))
            .catch((err) => reject(err));    
    })
}

{/*} update - deposit/withdraw amount
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
} */}

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










module.exports = {create, findOne, find, 
    //update
    all};