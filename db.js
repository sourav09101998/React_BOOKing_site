const mongoose = require("mongoose");

const MongoDBURL ='mongodb+srv://sourav1998:Sourav1998@cluster0.5gpwdqx.mongodb.net/BOOKing'
                   
mongoose.connect(MongoDBURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

module.exports = mongoose

 