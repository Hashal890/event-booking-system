const mongoose = require("mongoose");

const connect = () => {
  console.log("mongo connect");
  return mongoose.connect(
    "mongodb+srv://vishalmahale11:js864BTBC24fWlwZ@cluster0.tktvy3k.mongodb.net/bitrixstack?retryWrites=true&w=majority"
  );
};

module.exports = connect;
