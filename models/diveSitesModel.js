const mongoose = require("mongoose");

const diveSitesSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: {
        values: ["diveSite", "animal", "plant"],
        message: "type is either: diveSite, animal, plant",
      },
    },
    name: {
      type: String,
      unique: true,
    },
    longitude: {
      type: String,
    },
    latitude: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { useCreateIndex: true }
);

const DiveSites = mongoose.model("Site", diveSitesSchema);

module.exports = DiveSites;
