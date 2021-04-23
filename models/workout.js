const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    currentday: {
      
    },

    workouts: [
        {
            
               
            },
        

    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;