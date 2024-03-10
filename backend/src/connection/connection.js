const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection to mongodb database is successful");
  })
  .catch((reason) => {
    console.log(`Reason:${reason}`);
  });

// mongoose.connect is actually a promise which is by default in pending state .... that on success ie (.then part )  ... else catches teh error

// `I am a template literal ${iAmAVariable}`
// "I am a normal string with variable "+iAmAVariable+" appended like this";
