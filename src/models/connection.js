const { MongoClient } = require("mongodb");
require("dotenv").config();

const MONGO_DB_URL = `mongodb+srv://guiiffonseca:${process.env.DB_PASSWORD}@cluster0.6iwok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const DB_NAME = "spaceflight_news";

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

async function connection() {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
        .then((conn) => {
          db = conn.db(DB_NAME);
          return db;
        })
        .catch((err) => {
          console.log(err);
          process.exit();
        });
}

module.exports = {
  connection,
};
