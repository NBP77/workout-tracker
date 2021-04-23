const router = require("express").Router();

const db = require("../models");

// Aggregate, add fields and sum opp
router.get("/api/workouts", (req, res) => {
    db.Workout.aggregate( [
        {
          $addFields: {
            totalDuration: { $sum: "$exercises.duration" } ,
          }
        },
     ])
     .then(dbexercise => {
        res.json(dbexercise);
      })
      .catch(err => {
        res.json(err);
      });
});

// router.put("/api/workouts/:id", (req, res) => {
//     db.Workout.find({})
// })

// router.post("/api/workouts", (req, res) => {
//     db.Workout.find({})
// })

// // Aggregate, add fields and sum opp
// router.get("/api/workouts/range", (req, res) => {
//     db.Workout.find({})
// })



// app.get("/notes", (req, res) => {
//     db.Note.find({})
//       .then(dbNote => {
//         res.json(dbNote);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });







module.exports = router;


 db.Workout.aggregate( [
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" } ,
      }
    },
 ] )