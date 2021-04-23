const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutdb = new Schema({

    day: {
        type: Date,
        default: Date.now
    },

    exercises: [                  
        {
            type: String,
            name: String,
            duration: ,
            weight: ,
            reps: ,
            sets: 
    },
        

    ]
});

const Workout = mongoose.model("Workout", workoutdb);

module.exports = Workout;