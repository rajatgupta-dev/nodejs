const mongoose = require('mongoose');

const mongoUrl 	= process.env.MONGO_URL;
mongoose.connect(mongoUrl);

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongoUrl);
  console.log('Connected successfully to database');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const dbName = process.env.DATABASE;
var _db;
exports.getDb = function() {
	return _db;
}