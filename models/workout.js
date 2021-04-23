const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutdb = new Schema({
    
    day: {
      
    },

    exercises: [                  
        {
            
               
            },
        

    ]
});

const Workout = mongoose.model("Workout", workoutdb);

module.exports = Workout;