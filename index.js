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

                dal.create(req.params.name,req.params.desc,req.params.degree,req.params.manage,req.params.lang1,req.params.lang2,req.params.lang3,req.params.lang4,req.params.lang5,req.params.lang6,req.params.lang7,req.params.lang8,req.params.lang9,req.params.lang10).
                    then((user) => {
                        console.log(user);
                        res.send(user);            
                    });            
            }
        );





// find user account
app.get('/account/find/:degree/:manage/:lang1/:lang2/:lang3/:lang4/:lang5/:lang6/:lang7/:lang8/:lang9/:lang10', function (req, res) {

    dal.find(req.params.degree,req.params.manage,req.params.lang1,req.params.lang2,req.params.lang3,req.params.lang4,
        req.params.lang5,req.params.lang6,req.params.lang7,req.params.lang8,req.params.lang9,req.params.lang10).
        then((user) => {
            console.log(user);
            res.send(user);
    });
});

// find one user by email - alternative to find
app.get('/account/findOne/:degree/:manage/:lang1/:lang2/:lang3/:lang4/:lang5/:lang6/:lang7/:lang8/:lang9/:lang10', function (req, res) {

    dal.findOne(req.params.lang1).
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



//Heroku var port = app.listen(process.env.PORT || 3000);
app.listen(port);
console.log(`Running on on port: ${port}`)
//console.log('Running on port: ' + port);
// Retrieve Job-defined env vars
const {CLOUD_RUN_TASK_INDEX = 0, CLOUD_RUN_TASK_ATTEMPT = 0} = process.env;
// Retrieve User-defined env vars
const {SLEEP_MS, FAIL_RATE} = process.env;

// Define main script
const main = async () => {
  console.log(
    `Starting Task #${CLOUD_RUN_TASK_INDEX}, Attempt #${CLOUD_RUN_TASK_ATTEMPT}...`
  );
  // Simulate work
  if (SLEEP_MS) {
    await sleep(SLEEP_MS);
  }
  // Simulate errors
  if (FAIL_RATE) {
    try {
      randomFailure(FAIL_RATE);
    } catch (err) {
      err.message = `Task #${CLOUD_RUN_TASK_INDEX}, Attempt #${CLOUD_RUN_TASK_ATTEMPT} failed.\n\n${err.message}`;
      throw err;
    }
  }
  console.log(`Completed Task #${CLOUD_RUN_TASK_INDEX}.`);
};

// Wait for a specific amount of time
const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Throw an error based on fail rate
const randomFailure = rate => {
  rate = parseFloat(rate);
  if (!rate || rate < 0 || rate > 1) {
    console.warn(
      `Invalid FAIL_RATE env var value: ${rate}. Must be a float between 0 and 1 inclusive.`
    );
    return;
  }

  const randomFailure = Math.random();
  if (randomFailure < rate) {
    throw new Error('Task failed.');
  }
};

// Start script
main().catch(err => {
  console.error(err);
  process.exit(1); // Retry Job Task by exiting the process
});