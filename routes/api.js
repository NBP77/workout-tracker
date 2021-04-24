const router = require("express").Router();

const db = require("../models");

// Aggregate, add fields and sum opp
router.get("/api/workouts", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .then((dbexercise) => {
      res.json(dbexercise);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  db.Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((dbexercise) => {
      res.json(dbexercise);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
    .then((dbexercise) => {
      res.json(dbexercise);
    })
    .catch((err) => {
      res.json(err);
    });
})

// Aggregate, add fields and sum opp
router.get("/api/workouts/range", (req, res) => {
    db.Workout.aggregate([{ $addFields:
    {totalDuration: { $sum: "$exercise.duration"},
  },
},
])
.limit(7)
.then((dbexercise) => {
  res.json(dbexercise);
})
.catch((err) => {
  res.json(err);
});
})



module.exports = router;
