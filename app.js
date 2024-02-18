const express = require("express");
const morgan = require("morgan");

const diveRouter = require("./routes/diveRoutes");

const app = express();

//1. midlewares
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
//app.use(express.static(`${__dirname}/public`));

app.use("/api/dives", diveRouter);

module.exports = app;
//lizi

// amit
