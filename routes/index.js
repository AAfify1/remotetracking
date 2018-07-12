var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://remotehealthtrackingdb:HREQkyEFCveXM7egDJ9XT31GNbkGJvfHGPdFu9yBw7zJUjHx9UDqy6AADFVUjWU8O18tQYTG0UxC59MTSrWHWw==@remotehealthtrackingdb.documents.azure.com:10255/?ssl=true", function (err, db) {
  db.close();
});

module.exports = router;
