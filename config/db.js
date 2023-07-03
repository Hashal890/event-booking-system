const mongoose = require("mongoose");

const connect = () => {
  console.log("mongo connect");
  return mongoose.connect(process.env.MONGOOSE_DATABASE);
};

module.exports = connect;
