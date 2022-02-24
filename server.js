const express = require('express');
const app = express();
const dbconnect = require('./config/connection');
const routes = require('./routes/api');
const path = require('path');

app.use(express.static('public'))
app.use('/api',routes);

dbconnect();

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})
app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/exercise.html'))
})
app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/stats.html'))
})



// Needs to be at the bottom
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
})