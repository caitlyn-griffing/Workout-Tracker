const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({ message : 'this is a message' })
})

router.post('/workouts', (req, res) => {
    res.json({ message : 'this is a message' })
})

module.exports = router;