const mongoose = require('mongoose');

const diveSchema = new mongoose.Schema({
    diveCode: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    objectCode: {
        type: String,
        trim: true,

    },
    date: {
        type: Date,


    },
    time: {
        type: String,

    },
    diveSite: {
        type: String,

    },
    objectGroup: {
        type: String,

    },
    specie: {
        type: String,

    },
    idCode_photographerName: {
        type: String,

    },
    imageLocation: {
        type: String,

    },
    AR: {
        type: Boolean,

    },
    humanWildlifeInteraction: {
        type: String,

    },
    reportType: {
        type: String,
        enum: {
            values: ['snorkeling', 'SCUBA', 'freediving'],
            message: 'reportType is either: snorkeling, SCUBA freediving'
        },

    },
    typeOfDive: {
        type: String,

    },
    rankOfDive: {
        type: Number,
        enum: {
            values: [1, 2, 3, 4, 5],
            message: 'rankOfDive is between 1-5',
        },

    },
    media: {
        type: String,

    },
    documentation: {
        type: String,

    },
    ageOfDiver: {
        type: String,


    },
    sexOfDiver: {
        type: String,

    },
    maxDepth: {
        type: Number,


    },
    distance: {
        type: Number,

    },
    temp: {
        type: Number,

    },
    userDescription: {
        type: String,
        trim: true,

    },
    researcherComment: {
        type: String,
        trim: true,
    },
    linkURL: {
        type: String,

    },
    loggedBy: {
        type: String,

    },
    loggingDate: {
        type: Date,
        default: Date.now(),

    },
    reportReceivingDate: {
        type: Date,
    }

},
    { useCreateIndex: true }
);


const Dive = mongoose.model('Dive', diveSchema);

module.exports = Dive;