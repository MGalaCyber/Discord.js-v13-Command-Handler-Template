//=====================================| Import the Module |=====================================\\

const mongoose = require('mongoose');
require('colors');

//=====================================| Code |=====================================\\

if (!process.env.MONGO_URI) {
    throw new Error(`[DATABASE 1] `.bold.red + `The MONGO_URI environment variable is not set.`.yellow);
};

mongoose.connect(process.env.MONGO_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// mongoose.Promise = global.Promise

mongoose.connection.on('connected', () => {
    console.log(`[DATABASE 1] `.bold.green + `Connected to MongoDB!`.yellow);
});

mongoose.connection.on('disconnected', () => {
    console.log(`[DATABASE 1] `.bold.red + `Disconnected from MongoDB!`.yellow);
});

mongoose.connection.on('error', (err) => {
    console.log(`[DATABASE 1] `.bold.red + `Error: ${err}`.bgRed);
});




/**
/////////////////////////////////////////////////////////////////////
////                                                             ////
\\\\               Handlers Coded by GalaXd#9165                 \\\\
////                                                             ////
\\\\   Work for MGalaCyber Development | https://galacyber.xyz   \\\\
////                                                             ////
\\\\                    All Right Reserved!                      \\\\
////                                                             ////
/////////////////////////////////////////////////////////////////////
 */