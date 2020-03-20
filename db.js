//var mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://vmt07186:F490tmddmk|@cluster0-dx384.mongodb.net/test?retryWrites=true&w=majority');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://vmt07186:F490tmddmk|@cluster0-dx384.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

