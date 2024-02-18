const Dive = require("../models/diveModel");

exports.getAllDives = async (req, res) => {
    try {
        const dives = await Dive.find();
        console.log(Dive);

        res.status(200).json({
            status: 'success',
            results: dives.length,
            data: {
                dives,
            },
        });

    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message,
        });
    }
}

exports.createDive = async (req, res) => {
    try {
        const newDive = await Dive.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                dive: newDive
            }
        });

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
}