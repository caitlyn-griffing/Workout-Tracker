const router = require('express').Router();
const Workout = require('../models/Workout');

router.get('/workouts', async (req, res) => {
    const workouts = await Workout.find({}).then((workout) => {
        res.json(workout)
    })
})

router.post('/workouts', async (req, res) => {
    const newWorkout = await Workout.create(
        { }
    )
    console.log(newWorkout);
    res.json(newWorkout)

})
router.put('/workouts/:id', async (req, res) => {
    //    console.log(req.body)
    const newExcercise = await Workout.findByIdAndUpdate(req.params.id, {
        exercises: req.body
    });

    res.json(newExcercise)
})

module.exports = router;