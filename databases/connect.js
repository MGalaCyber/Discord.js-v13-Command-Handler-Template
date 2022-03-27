//=====================================| Import the Module |=====================================\\

const mongoose = require('mongoose');

//=====================================| Code |=====================================\\

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log(`[DATABASE 1] `.bold.green + `Connected to MongoDB!`.yellow)).catch(err => console.log(err));


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