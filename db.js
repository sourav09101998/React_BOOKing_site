const mongoose = require("mongoose");

const MongoDBURL ='mongodb+srv://..................path...........................'
                   
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

 
