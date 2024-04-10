const DiveSite = require("../models/diveSitesModel");
const APIfeatures = require("../utils/APIfeatures");

exports.getAllDiveSites = async (req, res) => {
  try {
    console.log(req.query);
    const features = new APIfeatures(DiveSite.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .pagination();
    const diveSites = await features.findCommand;

    res.status(200).json({
      status: "success",
      results: diveSites.length,
      data: {
        diveSites,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.createDiveSite = async (req, res) => {
  try {
    const newDiveSite = await DiveSite.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        diveSite: newDiveSite,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateDiveSite = async (req, res) => {
  try {
    const diveSiteToUpdate = await DiveSite.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        diveSiteToUpdate,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteDiveSite = async (req, res) => {
  try {
    const diveSiteToDelete = await DiveSite.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
      message: `${req.params.id} deleted !`,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
