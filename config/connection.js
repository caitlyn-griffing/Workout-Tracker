const mongoose = require('mongoose');

// MY NOTESSSSSS
// https://cloud.mongodb.com/v2/621573655a8f826adf2749cd#clusters
// DEPLOYMENT => 

async function connector(){
    const uri = 'mongodb+srv://root:asdf@cluster0.mowog.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log('db connected')
    })
};

module.exports = connector;