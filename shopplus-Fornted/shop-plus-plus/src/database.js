const monogodb = require("mongodb");
const { useCallback } = require("react");

const MongoClient = mongodb.MonogoClient;

const url = "mongodb+srv://deepakdv16:<db_password>@cluster1.1o2l7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

const monogoConnect = () => {

MongoClient.connect(MONGO_URL).then((client) => {

  console.log(client);
  Callback(client);
}).catch( err => {

  console.log('Error while connecting to mango', err);
});

}

module.exports = monogoConnect;