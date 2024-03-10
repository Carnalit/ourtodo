const express = require("express");
const app = express();
const cors = require("cors"); //cross origin resource sharing

require("../backend/src/connection/connection.js");

const router = require("../backend/src/routes/ToDoRoutes.js");
app.use(cors());
app.use(express.json());
app.use(router);

app.get("/", (req, res, next) => {
  res.status(200).send("hello, I am trying it.");
  // this is the route
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
}); // listen is for telling the app that we are running you on this domain : 5000 (port)

//BSON in mongodb
