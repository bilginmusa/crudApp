const mongoose = require("mongoose");

module.exports = () => {

  mongoose.connect(process.env.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on("connect", () => {
    console.log("MongoDb connected.");
  });

  mongoose.connection.on("error", (e) => {
    console.log("MongoDb not connected:", e);
  });
};
