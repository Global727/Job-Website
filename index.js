var express = require('express');
var app     = express();
var cors    = require('cors');
var dal     = require('./dal.js');
const e = require('express');
const port = 3000;


// used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());

// create user account
app.get('/account/create/:name/:desc/:degree/:manage/:lang1/:lang2/:lang3/:lang4/:lang5/:lang6/:lang7/:lang8/:lang9/:lang10', function (req, res) {

    // check if account exists
    dal.find(req.params.desc).
        then((users) => {

            // if user exists, return error message
            if(users.length > 0){
                console.log('User already in exists');
                res.send('User already in exists');    
            }
            else{
                // else create user
                dal.create(req.params.name,req.params.desc,req.params.degree,req.params.manage,req.params.lang1,req.params.lang2,req.params.lang3,req.params.lang4,req.params.lang5,req.params.lang6,req.params.lang7,req.params.lang8,req.params.lang9,req.params.lang10).
                    then((user) => {
                        console.log(user);
                        res.send(user);            
                    });            
            }

        });
});


// login user 
app.get('/account/create/:name/:desc/:degree/:manage/:lang1/:lang2/:lang3/:lang4/:lang5/:lang6/:lang7/:lang8/:lang9/:lang10', function (req, res) {

    dal.find(req.params.desc).
        then((user) => {

            // if user exists, check password
            if(user.length > 0){
                if (user[0].lang === req.params.lang){
                    res.send(user[0]);
                }
                else{
                    res.send('Login failed: wrong password');
                }
            }
            else{
                res.send('Login failed: user not found');
            }
    });
    
});

// find user account
app.get('/account/find/:desc', function (req, res) {

    dal.find(req.params.desc).
        then((user) => {
            console.log(user);
            res.send(user);
    });
});

// find one user by email - alternative to find
app.get('/account/findOne/:desc', function (req, res) {

    dal.findOne(req.params.desc).
        then((user) => {
            console.log(user);
            res.send(user);
    });
});


// update - deposit/withdraw amount
app.get('/account/update/:desc/:amount', function (req, res) {

    var amount = Number(req.params.amount);

    dal.update(req.params.desc, amount).
        then((response) => {
            console.log(response);
            res.send(response);
    });    
});

// all accounts
app.get('/account/all', function (req, res) {

    dal.all().
        then((docs) => {
            console.log(docs);
            res.send(docs);
    });
});

app.get('/account')

//Heroku var port = app.listen(process.env.PORT || 3000);
app.listen(port);
console.log(`Running on on port: ${port}`)
//console.log('Running on port: ' + port);
