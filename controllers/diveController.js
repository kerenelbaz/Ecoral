const Dive = require("../models/diveModel");

exports.getAllDives = async(req,res)=>{
    try{
        const dives = await Dive.find();

        res.status(200).json({
            status: 'success',
            results: dives.length,
            data: {
              dives,
            },
        });

    }
    catch(err){
        res.status(404).json({
            status: 'fail',
            message: err.message, 
        });
    }
}