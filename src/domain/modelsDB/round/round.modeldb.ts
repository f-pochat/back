const mongoose = require("mongoose");

const RoundSchema = new mongoose.Schema({
    onGoing: {
        type: Boolean,
        required: true,
        default: true,
    },
    userId: {
        type: String,
        required: true,
    },
    courseId: {
        type: String,
        required: true,
    },
    playedAt: {
        type: Date,
        required: true,
    },
    playedHoles: [{
        num: Number,
        score: Number,
        putts: Number,
        fairway: String,
    }]

});

//@ts-ignore
const Round = mongoose.model("Round", RoundSchema);

module.exports = Round;