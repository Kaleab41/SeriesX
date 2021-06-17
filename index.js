const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
var cors = require("cors");

const app = express();

app.use(express.json());
const corsOptions = {
  exposedHeaders: "x-auth-token",
};

app.use(cors(corsOptions));

const mode = app.get("env");
const port = config.get("port");

app.listen(port, () => {
  console.log(`[+] stated on port <${port}> and in <${mode}> mode`);
});

const url = config.get("MongoDB_url");
mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err == null) console.log(`[+] conned to mongoDB.....<${mode}>`);
    else console.log(`[-] can not connect to mongoDB atlas .....<${mode}>`);
  }
);
