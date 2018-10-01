#! /usr/bin/env node

console.log('This script populates some test levels');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

var async = require('async')
var Level = require('./models/level')



var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var levels = []

function levelCreate(title, descriptors, monthly, annual, cb){
    let levelDetail = {title:title, descpriptors:descriptors, monthly:monthly, annual:annual}

    let level = new Level(levelDetail);

    level.save((err) => {
        if(err){
            cb(err, null)
            return;
        }
        console.log('New level: ' + level);
        levels.push(level)
        cb(null, level)

    });
}


/* function authorCreate(first_name, family_name, d_birth, d_death, cb) {
  authordetail = {first_name:first_name , family_name: family_name }
  if (d_birth != false) authordetail.date_of_birth = d_birth
  if (d_death != false) authordetail.date_of_death = d_death
  
  var author = new Author(authordetail);
       
  author.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Author: ' + author);
    authors.push(author)
    cb(null, author)
  }  );
} */


function createLevels(cb) {
    async.parallel([
        function(callback) {
            levelCreate('Standard', [
                "Support the independence of the Premium Times and our award-winning journalism",
                "Get Welcome Package",
                "Insider Programs",
                "Four Tickets to Premium Times Events",
                "Weekly Briefings"
            ], 10000, 100000, callback);
        },
        function(callback) {
            levelCreate('Partner', [
                "Support the independence of the Premium Times and our award-winning journalism",
                "Get Welcome Package",
                "Insider Programs",
                "Four Tickets to Premium Times Events",
                "Weekly Briefings"
            ], 100000, 1000000, callback);
        },
        function(callback) {
            levelCreate('Patron', [
                "Support the independence of the Premium Times and our award-winning journalism",
                "Get Welcome Package",
                "Insider Programs",
                "Four Tickets to Premium Times Events",
                "Weekly Briefings"
            ], 1000000, 10000000, callback);
        },
        function(callback) {
            levelCreate('Gold Member', [
                "Support the independence of the Premium Times and our award-winning journalism",
                "Get Welcome Package",
                "Insider Programs",
                "Four Tickets to Premium Times Events",
                "Weekly Briefings"
            ], 1000000, 10000000, callback);
        },
        ],
        // optional callback
        cb);
}



/* 
function createGenreAuthors(cb) {
    async.parallel([
        function(callback) {
          authorCreate('Patrick', 'Rothfuss', '1973-06-06', false, callback);
        },
        function(callback) {
          authorCreate('Ben', 'Bova', '1932-11-8', false, callback);
        },
        function(callback) {
          authorCreate('Isaac', 'Asimov', '1920-01-02', '1992-04-06', callback);
        },
        function(callback) {
          authorCreate('Bob', 'Billings', false, false, callback);
        },
        function(callback) {
          authorCreate('Jim', 'Jones', '1971-12-16', false, callback);
        },
        function(callback) {
          genreCreate("Fantasy", callback);
        },
        function(callback) {
          genreCreate("Science Fiction", callback);
        },
        function(callback) {
          genreCreate("French Poetry", callback);
        },
        ],
        // optional callback
        cb);
} */






async.series([
    createLevels
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    // All done, disconnect from database
    mongoose.connection.close();
});

