const express = require("express");
const morgan = require("morgan");

const diveRouter = require("./routes/diveRoutes");
const dive_sites_mapRouter = require("./routes/dive_sites_mapRoutes");
const pendings_divesRoutes = require("./routes/pendings_divesRoutes");

const app = express();

//1. midlewares
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/dives", diveRouter);
app.use("/api/dive_sites_map", dive_sites_mapRouter);
app.use("/api/pendings_dives", pendings_divesRoutes);

module.exports = app;
