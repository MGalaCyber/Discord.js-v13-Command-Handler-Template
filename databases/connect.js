//=====================================| Import the Module |=====================================\\

const mongoose = require('mongoose');
require('colors');

//=====================================| Code |=====================================\\

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log(`[DATABASE 1] `.bold.green + `Connected to MongoDB!`.yellow);
})

mongoose.connection.on('error', (err) => {
  console.log(`[DATABASE 1] `.bold.red + `Error: ${err}`.bgRed);
})


/**
/////////////////////////////////////////////////////////////////////
////                                                             ////
\\\\                  Bot Coded by GalaXd#9165                   \\\\
////                                                             ////
\\\\   Work for MGalaCyber Development | https://galacyber.xyz   \\\\
////                                                             ////
\\\\                    All Right Reserved!                      \\\\
////                                                             ////
/////////////////////////////////////////////////////////////////////
 */