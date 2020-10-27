const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require("express");
const scores = require("./routes/scores");
const logs = require("./routes/logs");
const cors = require("cors");

const app = express();

app.use(cors());
// bodyParser Middleware
app.use(bodyParser.json());

// DB Config
const db = require("./configuration/config").mongoURI;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Use Routes
app.use("/scores", scores);
app.use("/logs", logs);

// process.env.PORT for heroku
const isDeveloping = process.env.NODE_ENV !== "production";
const port = isDeveloping ? 3001 : process.env.PORT;

app.listen(port, (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.info(
    "==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.",
    port,
    port
  );
});

module.exports = app;
