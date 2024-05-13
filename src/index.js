const express = require("express");
const bodyParser = require("body-parser");
const apiRouter = require("./routes");
const { PORT } = require("./config/server.config");
const errorHandler = require("./utils/errorHandler");
const connectToDB = require('./config/db.config');
const mongoose = require('mongoose')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// If any request comes and route starts with /api, we map it to apiRouter
app.use("/api", apiRouter);
// last middleware if any error comes
app.use(errorHandler);
app.get("/ping", (req, res) => {
  return res.json({ message: "Problem Service is alive" });
});

app.listen(PORT, async() => {
  console.log(`Server started at PORT: ${PORT}`);
  await connectToDB();
  /**Testing is mongoDB connection by Adding Dummy Data */
  // const Cat = mongoose.model('Cat', { name: String });
  //        const kitty = new Cat({ name: 'Zildjian' });
  //        kitty.save().then(() => console.log('meow'));
  console.log("Successfully connected to db");
});
