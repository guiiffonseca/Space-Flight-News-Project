const { MongoClient } = require("mongodb");

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL =
  "mongodb+srv://guiiffonseca:<password>@cluster0.6iwok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

let db = null;

const connection = () => {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS).then((conn) => {
        db = conn.db("model_example");
        return db;
      });
};

module.exports = connection;
