const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: async function (callback) {
    await client.connect();
    const database = client.db("gator-dwelling");
    _db = database;
    console.log("Connected to database");
    return database
  },
 
  getDb: function () {
    return _db;
  },
};