const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutdb = new Schema({
    currentday: {
      
    },

    workouts: [
        {
            
               
            },
        

    ]
});

const Workout = mongoose.model("Workout", workoutdb);

module.exports = Workout;