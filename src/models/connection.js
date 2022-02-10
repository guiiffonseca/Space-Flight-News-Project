const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://guiiffonseca:<password>@cluster0.6iwok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

function connection() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  });
}

module.exports = connection;
