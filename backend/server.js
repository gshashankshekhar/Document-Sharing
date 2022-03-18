const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//database
const db = require("./app/models");
const Role = db.role;

const app = express();


var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync();

// for  first time initialise roles table
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });

// function initial() {
//   Role.create({
//     id: 1,
//     name: "user"
//   });
 
//   Role.create({
//     id: 2,
//     name: "Reviewer"
//   });
 
//   Role.create({
//     id: 3,
//     name: "admin"
//   });
// }

// simple route
app.get("/", (req, res) => {
  res.json({ message: "User Login For Doc Sharing Platform." });
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});