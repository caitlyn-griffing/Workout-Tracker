const mongoose = require('mongoose');

// MY NOTESSSSSS
// https://cloud.mongodb.com/v2/621573655a8f826adf2749cd#clusters
// DEPLOYMENT => 


const uri = 'mongodb+srv://root:asdf@cluster0.mowog.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
module.exports = mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('db connected')
})